import React from 'react';
import {FaWarehouse,FaUserEdit,FaUsers,FaChartLine} from 'react-icons/fa';
import {MdSettingsApplications,MdShoppingCart,MdContactMail} from 'react-icons/md';
import {Link} from 'react-router-dom';

import './Home.css'


function Home() {

const refUser=React.createRef()
const refSetting=React.createRef()
const refCustomer=React.createRef()
const refProduct=React.createRef()
const refBill=React.createRef()
const refContact=React.createRef()

return (
    <div className="home-hero">
        <div className="home-bg-screen">
            <div className="home-box">
                
                <div className="home-link" 
                     onClick={e=>{refUser.current.click()}}>
                    <div >
                        <FaUserEdit className="home-icon"/>
                    </div>
                    <div>
                        <h3>User</h3>
                    </div>
                </div>
                
                <div className="home-link"
                     onClick={e=>{refSetting.current.click()}}>
                    <div>
                        <MdSettingsApplications className="home-icon"/>
                    </div>
                    <div>
                        <h3>Setting</h3>
                    </div>
                </div>

                <div className="home-link"
                     onClick={e=>{refCustomer.current.click()}}>
                    <div>
                        <FaUsers className="home-icon"/>
                    </div>
                    <div>
                        <h3>Customer</h3>
                    </div>
                </div>

                <div className="home-link"
                     onClick={e=>{refProduct.current.click()}}>
                    <div>
                        <FaWarehouse className="home-icon"/>
                    </div>
                    <div>
                        <h3>Product</h3>
                    </div>
                </div>

                <div className="home-link"
                     onClick={e=>{refBill.current.click()}}>
                    <div>
                        <MdShoppingCart className="home-icon"/>
                    </div>
                    <div>
                        <h4>Bill</h4>
                    </div>
                </div>

                <div className="home-link"
                     onClick={e=>{refContact.current.click()}}>
                    <div>
                        <MdContactMail className="home-icon"/>
                    </div>
                    <div>
                        <h4>Contact</h4>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="d-none">
            <Link ref={refUser} to="/user"/>
            <Link ref={refSetting} to="/basicdata"/>
            <Link ref={refCustomer} to="/customer"/>
            <Link ref={refProduct} to="/product"/>
            <Link ref={refBill} to="/bill"/>
            <Link ref={refContact} to="/contact"/>

        </div>
        
    </div>
)
}

export default Home;
/*
<div className="home-link"
onClick={e=>{refProduct.current.click()}}>
<div>
   <FaWarehouse className="home-icon"/>
</div>
<div>
   <h3>คลังสินค้า</h3>
</div>
</div>
*/