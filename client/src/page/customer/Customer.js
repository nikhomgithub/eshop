import React from 'react';

import PageComponent from '../../component/dataComponent/PageComponent.js'
import {MainContext} from '../../context/MainContext';

import StateTemplate from '../../model/StateTemplate'
import FormTemplate from '../../render/renderForm/FormTemplate'
import FilterTemplate from '../../render/renderFilter/FilterTemplate'
import inputState from '../../component/table/inputState'
import ModalComponent from '../../render/ModalComponent'
//import './App2.css'

function Customer() {
const {customerForm}=FormTemplate
const {customerState}=StateTemplate
const {customerFilter}=FilterTemplate
const {customerInputState}=inputState

const [showPartnerGroupModal,
       setShowPartnerGroupModal]=React.useState(false)

const {basicData,widthLeft,setWidthLeft,myheader}=React.useContext(MainContext)

const shopTarget=localStorage.getItem('shoptarget')

return(
<div className="bgc-lightGray" style={{height:"100%",width:"100%"}}>
   {`Customer : ${shopTarget}`}
</div>
)

}
export default Customer;
