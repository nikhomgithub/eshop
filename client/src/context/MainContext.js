import React from 'react'

export const MainContext=React.createContext();

const MainContextProvider=(props)=>{
    console.log('MainContext')
    console.log(window.location.href)
    let temp=window.location.href.split("/")
    console.log(temp)
    
    if(temp[4]){
        localStorage.setItem('shoptarget',temp[4])
    }
    else{
        localStorage.setItem('shoptarget',null)
    }

    //==========================
    //basicData
    const [reloadCheckToken,setReloadCheckToken]=React.useState(true)
    const [haveShopToken,setHaveShopToken]=React.useState(false)
    const [haveUserToken,setHaveUserToken]=React.useState(false)
    const [userName,setUserName]=React.useState(null)


    const myheader={headers: {'Content-Type': 'application/json'}}

    React.useEffect(()=>{
        if(reloadCheckToken){

            if(localStorage.getItem('shopauthorization')
            ){
                setHaveShopToken(true)
            }
            else{
                setHaveShopToken(false)
                localStorage.removeItem('shopauthorization')
                localStorage.removeItem('userauthorization')
                localStorage.removeItem('username')
            }

            if(localStorage.getItem('userauthorization')&&
               localStorage.getItem('username')){
                setHaveUserToken(true)
                setUserName(localStorage.getItem('username'))
            }
            else{
                setHaveUserToken(false)
                setUserName(null)
                localStorage.removeItem('userauthorization')
                localStorage.removeItem('username')
            }

            setReloadCheckToken(false)
        }
    },[reloadCheckToken])
    
    
//=========================================
//==================================
return(
        <MainContext.Provider value={
            {
               //allTableTemplate,
               //reloadTableTemplate,setReloadTableTemplate,
               myheader,
            
               reloadCheckToken,setReloadCheckToken,
               haveShopToken,setHaveShopToken,
               haveUserToken,setHaveUserToken,
               userName,setUserName,
            }
        }>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;
