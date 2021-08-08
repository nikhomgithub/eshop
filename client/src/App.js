import React from 'react';

import {Route,Switch,Redirect} from 'react-router-dom';

import Navbar from './component/navbar/Navbar'

import Home from './page/home/Home'
import ShopWelcome from './page/shop/ShopWelcome'
import UserWelcome from './page/user/UserWelcome'
import Customer from './page/customer/Customer'
import {MainContext} from './context/MainContext';

import './App2.css'

function App() {

const {username,setUsername,
   reloadCheckToken,setReloadCheckToken,
   haveShopToken,setHaveShopToken,
   haveUserToken,setHaveUserToken,
   myheader
}=React.useContext(MainContext)

//let temp=window.location.href.split("/")

const shopTarget=localStorage.getItem('shoptarget')


return(
<div className="bgc-lightGray" style={{height:"100vh",width:"100vw"}}>
   <div className="h-5">
         <Navbar/>   
   </div>
   
   <div className="h-95 w-100">     
      <Switch>
         <Route path="/home" component={Home}/>
         <Route path="/pagecustomer" component={Customer} /> 
         <Route exact path="/" render={() => <Redirect to="/home" />} />   
      </Switch>
   </div>
</div>
)

}
export default App;





/*


//=================================

import React from 'react';

import {Route,Switch,Redirect} from 'react-router-dom';

import Navbar from './component/navbar/Navbar'

import Home from './page/home/Home'
import ShopWelcome from './page/shop/ShopWelcome'
import UserWelcome from './page/user/UserWelcome'
import BasicData from './page/basicdata/BasicData'
import Customer from './page/customer/Customer'
import Product from './page/product/Product'
import Bill from './page/bill/Bill'


import {MainContext} from './context/MainContext';

import './App2.css'

function App() {

const {username,setUsername,
   reloadCheckToken,setReloadCheckToken,
   haveShopToken,setHaveShopToken,
   haveUserToken,setHaveUserToken,
   userName,setUserName,
   basicData,myheader
}=React.useContext(MainContext)


return(
<div className="bgc-lightGray" style={{height:"100vh",width:"100vw"}}>
   <div className="h-5">
         <Navbar/>   
   </div>

   
   <div className="h-95">
   
      <switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/shop" component={haveShopToken?UserWelcome:ShopWelcome}/>
         <Route exact path="/user" component={haveShopToken?UserWelcome:ShopWelcome}/> 
         <Route exact path="/basicdata" 
            component={haveShopToken?(haveUserToken?BasicData:UserWelcome):ShopWelcome} /> 
         <Route exact path="/customer" 
            component={haveShopToken?(haveUserToken?Customer:UserWelcome):ShopWelcome}/> 
         <Route exact path="/product" 
            component={haveShopToken?(haveUserToken?Product:UserWelcome):ShopWelcome}/> 
         <Route exact path="/bill" 
            component={haveShopToken?(haveUserToken?Bill:UserWelcome):ShopWelcome}/> 
         <Route render={() => <Redirect to="/" />} />   
      </switch>
   </div>

   {basicData
   ?<div style={{position:"fixed",maxWidth:"50%",
                bottom:basicData.bottom?basicData.bottom:"0px",
                right:basicData.right?basicData.right:"20px",
                backgroundColor:basicData.bgColor?basicData.bgColor:"#EFC050",
                color:basicData.color?basicData.color:"black",
                display:"flex",alignItems:"center",justifyContent:"center",
                borderRadius: "0.3rem",
                }}>
      <h2>{`${basicData.contact}`}</h2>
   </div>
   :null
   }
</div>
)

}
export default App;





*/