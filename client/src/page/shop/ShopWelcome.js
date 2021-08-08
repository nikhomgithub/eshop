import React from 'react';
import axios from 'axios'
import {MainContext} from '../../context/MainContext'

import FormTemplate from '../../render/renderForm/FormTemplate'
import StateTemplate from '../../model/StateTemplate'

import ModalForm from '../../render/renderForm/ModalForm'
import renderModalError from '../../render/renderModalError'

import axiosUtil from '../../util/axiosUtil'
function ShopWelcome() {
  
  const {basicData,setReloadCheckToken}=React.useContext(MainContext)
  const {shopSignUpForm,shopLogInForm,shopChangePasswordForm}=FormTemplate      
  const {shopSignUpState,shopLogInState,shopChangePasswordState}=StateTemplate
  const {catchErrorToMessage}=axiosUtil

  //====================================
  const [showModalError,setShowModalError]=React.useState(false)
  const [showShopSignUp,setShowShopSignUp]=React.useState(false)
  const [showShopLogIn,setShowShopLogIn]=React.useState(false)
  const [showShopChangePassword,setShowShopChangePassword]=React.useState(false)

  const [message,setMessage]=React.useState(null)
  //====================================
  const submitShopSignUp=(formInputState)=>{
    axios.post(`/shop/shopsignup`,formInputState)
    .then(result=>{
        setShowShopSignUp(false)
    })
    .catch(error=>{
        catchErrorToMessage(error,setMessage)
        setShowModalError(true)
    })
  }

  const submitShopLogIn=(formInputState)=>{
    const {shopName}=formInputState
    console.log(`shopLogin : ${shopName}`)

    axios.post(`/shop/shoplogin`,formInputState)
    .then(result=>{
        setShowShopLogIn(false)
        localStorage.setItem('shopauthorization',
        `b ${result.data.shopToken}`)
        localStorage.setItem('shopname',shopName)
        setReloadCheckToken(true)
    })
    .catch(error=>{
        catchErrorToMessage(error,setMessage)
        setShowModalError(true)
    })
  }

  const submitShopChangePassword=(formInputState)=>{
    axios.post(`/shop/shopchangepassword`,formInputState)
    .then(result=>{
        setShowShopChangePassword(false)
    })
    .catch(error=>{
        catchErrorToMessage(error,setMessage)
        setShowModalError(true)
    })
  }

  //=======================
return (
    <div className="page-center">
        <div className="w-50 h-40 ">
            
            <div className="flex-center-center h-60"
                 style={{background:"rgba(225,225,225,0.8)",
                         boxShadow:"5px 5px 20px black",
                         borderRadius:"10px"  
                }}
            >
                <h1 style={{fontSize:"2rem",textAlign:"center"}}>
                Log In Shop Before Use</h1>
            </div>
            
            <div className="flex-center-center h-30">
                {/*
                <div className="xc4 sc12 p-1 ">
                    <button className="xc12" 
                            style={{fontSize:"1.2rem"}}
                            onClick={e=>{setShowShopSignUp(true)}}
                    >
                    Add New Shop
                    </button>
                </div>
                */}
                <div className="xc4 sc12 p-1">
                  <button className="xc12" 
                        style={{fontSize:"1.2rem"}}
                        onClick={e=>{
                            setShowShopLogIn(true)
                        }}
                  >
                    Log In Shop
                  </button>
                </div>
                {/*
                <div className="xc4 sc12 p-1">
                    <button className="xc12" 
                        style={{fontSize:"1.2rem"}}
                        onClick={e=>{
                            setShowShopChangePassword(true)
                        }}
                    >
                    Change Password
                    </button>

                </div>
                */}

                {/*
                showShopSignUp
                ?<ModalForm
                    lb={'Add Shop'}
                    formTemplate={shopSignUpForm}
                    stateTemplate={shopSignUpState}
                    setShow={setShowShopSignUp}
                    submitFunction={submitShopSignUp}
                />
                :null
                */}
                {
                showShopLogIn
                ?<ModalForm
                    lb={'Shop Log In'}
                    formTemplate={shopLogInForm}
                    stateTemplate={shopLogInState}
                    loadData={{
                        shopName:"star9",
                        password:"star9"
                    }}
                    setShow={setShowShopLogIn}
                    submitFunction={submitShopLogIn}
                />:
                null
                }
                {/*
                showShopChangePassword
                ?<ModalForm
                    lb={ 'Change Password'}
                    formTemplate={shopChangePasswordForm}
                    stateTemplate={shopChangePasswordState}
                    setShow={setShowShopChangePassword}
                    submitFunction={submitShopChangePassword}
                />
                :null
                */}

                {
                showModalError
                ?renderModalError({show:showModalError,
                                   setShow:setShowModalError,
                                   message,setMessage
                                })
                :null
                }
            </div>
        </div>
    </div>
  );
}

export default ShopWelcome;
