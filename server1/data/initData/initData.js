const tableTemplate=require('./tableTemplate')
const uuid = require("uuid");

//==============================
const shopInit={
    shopName:"star9",
    password:"star9",
    active:true,
    code:uuid.v4(),
    dateIn: new Date().toISOString().substring(0,10),
    
    ownerName:"peter",
    ownerPassword:"peter",
    ownerActive:true,
    ownerCode:uuid.v4(),
    
    ownerEmail:'peter@mail.com'
}
//-----------------------------
const userInit={
    id:1,
    username:"usera",
    password:"usera",
    active:true,
    code:uuid.v4(),
    userLevel:"admin",
    dateIn: new Date().toISOString().substring(0,10),
    name:"usera",
    surname:"usera"
}

//--------------------------------------
const basicDataInit={
    id:1,
    title:["mr","ms"],
    unit:["pcs","kg"],
    userLevel:["admin","staff","visitor"],

    //partnerType:["ผู้ซื้อ","ผู้ขาย"],
    bgColor:"#EFC050",
    color:"black",
    bottom:"0px",
    right:"20px",
    fontSize:"1rem",
    maxWidth:"50%",
    footer:"techshare4all@gmail.com",
    contact:"techshare4all@gmail.com",
    about:"This prototype application is developed from MERN stack which including MongoDb, Express, React & Node. If you are interesed, please contact me. I look forward to work with you to develop application as your demand",


    routeAuth:[ 
     {id:1,routeAddress:'/user/adduser', routeName:"N/A", userLevel:["admin"]},
     //{id:2,routeAddress:'/user/init', routeName:"N/A", userLevel:["admin"]},
     //{id:3,routeAddress:'/user/restore', routeName:"N/A", userLevel:["admin"]},
     //{id:4,routeAddress:'/user/backup', routeName:"N/A", userLevel:["admin"]},     
     {id:6,routeAddress:'/user/getcustom', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:8,routeAddress:'/user/deletecustom', routeName:"N/A", userLevel:["admin"]},
     //{id:9,routeAddress:'/user/pop', routeName:"N/A", userLevel:["admin"]},

     //{id:7,routeAddress:'/user/addcustom', routeName:"N/A", userLevel:["admin","staff"]},
     //{id:8,routeAddress:'/user/updatecustom', routeName:"N/A", userLevel:["admin","staff"]},

     //{id:10,routeAddress:'/group/init', routeName:"N/A", userLevel:["admin"]},
     //{id:11,routeAddress:'/group/restore', routeName:"N/A", userLevel:["admin"]},
     //{id:12,routeAddress:'/group/backup', routeName:"N/A", userLevel:["admin"]}, 
     {id:14,routeAddress:'/group/getcustom', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:16,routeAddress:'/group/deletegroup', routeName:"N/A", userLevel:["admin","staff"]},
     {id:17,routeAddress:'/group/addgroup', routeName:"N/A", userLevel:["admin","staff"]},
     {id:18,routeAddress:'/group/updategroup', routeName:"N/A", userLevel:["admin","staff"]},
     //{id:19,routeAddress:'/group/pop', routeName:"N/A", userLevel:["admin"]},

     //{id:20,routeAddress:'/customer/init', routeName:"N/A", userLevel:["admin"]},
     //{id:21,routeAddress:'/customer/restore', routeName:"N/A", userLevel:["admin"]},
     //{id:22,routeAddress:'/customer/backup', routeName:"N/A", userLevel:["admin"]},     
     {id:25,routeAddress:'/customer/getlimit', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:26,routeAddress:'/customer/deletecustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:27,routeAddress:'/customer/addcustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:28,routeAddress:'/customer/updatecustom', routeName:"N/A", userLevel:["admin","staff"]},
     //{id:29,routeAddress:'/customer/pop', routeName:"N/A", userLevel:["admin"]},

     //{id:30,routeAddress:'/bill/init', routeName:"N/A", userLevel:["admin"]},
     //{id:31,routeAddress:'/bill/restore', routeName:"N/A", userLevel:["admin"]},
     //{id:32,routeAddress:'/bill/backup', routeName:"N/A", userLevel:["admin"]},
     {id:35,routeAddress:'/bill/getlimit', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:36,routeAddress:'/bill/deletecustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:37,routeAddress:'/bill/addcustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:38,routeAddress:'/bill/updatecustom', routeName:"N/A", userLevel:["admin","staff"]},
     //{id:39,routeAddress:'/bill/pop', routeName:"N/A", userLevel:["admin"]},

     //{id:40,routeAddress:'/basicdata/init', routeName:"N/A", userLevel:["admin"]},
     //{id:41,routeAddress:'/basicdata/restore', routeName:"N/A", userLevel:["admin"]},
     //{id:42,routeAddress:'/basicdata/backup', routeName:"N/A", userLevel:["admin"]},
     {id:44,routeAddress:'/basicdata/getcustom', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:45,routeAddress:'/basicdata/deletecustom', routeName:"N/A", userLevel:["admin"]},
     {id:46,routeAddress:'/basicdata/addcustom', routeName:"N/A", userLevel:["admin"]},
     {id:47,routeAddress:'/basicdata/updatecustom', routeName:"N/A", userLevel:["admin"]},
     //{id:48,routeAddress:'/basicdata/pop', routeName:"N/A", userLevel:["admin"]},

     //{id:49,routeAddress:'/product/init', routeName:"N/A", userLevel:["admin"]},
     //{id:50,routeAddress:'/product/restore', routeName:"N/A", userLevel:["admin"]},
     //{id:51,routeAddress:'/product/backup', routeName:"N/A", userLevel:["admin"]},     
     {id:54,routeAddress:'/product/getlimit', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:55,routeAddress:'/product/deletecustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:56,routeAddress:'/product/addcustom', routeName:"N/A", userLevel:["admin","staff"]},
     {id:57,routeAddress:'/product/updatecustom', routeName:"N/A", userLevel:["admin","staff"]},
     //{id:58,routeAddress:'/group/pop', routeName:"N/A", userLevel:["admin"]},

     //{id:59,routeAddress:'/tabletemplate/init', routeName:"N/A", userLevel:["admin"]},
     //{id:60,routeAddress:'/tabletemplate/restore', routeName:"N/A", userLevel:["admin"]},
     //{id:61,routeAddress:'/tabletemplate/backup', routeName:"N/A", userLevel:["admin"]},
     {id:63,routeAddress:'/tabletemplate/getcustom', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     {id:67,routeAddress:'/tabletemplate/updatetabletemplate', routeName:"N/A", userLevel:["admin","staff","visitor"]},
     //{id:68,routeAddress:'/tabletemplate/pop', routeName:"N/A", userLevel:["admin"]},
    ]
}
//------------------------------------
const productInit={
    id:1,
    barcode:"1",
    name:"Cola",
    groupId:1,
    groupName:"main",
    photoUrl1:["https://picsum.photos/200"],
    unit:"pcs",
    price:100,
    remark:"sugar free",
}
//-------------------------------------
const groupInit={
        id:1,
        groupName: "main",
        children:[],
        parentId:null,
}
//-------------------------------------
const customerInit={
    id:1,
    title:"mr",
    name:"Joe",
    surname:"Roy",
    phone:["0922834746","0781290456"],
    remark:"ของแท้",
}
//-------------------------------
const billInit={
    id:1,
    date:"2021-01-21",

    customerId:1,
    title:"mr",
    name:"Joe",
    surname:"Roy",
    phone:["0922834746","0781290456"],

    remark:"",
    
    total:100,
    reduction:20,
    grandTotal:80,

    detail:[{
        id:1,
        barcode:"1",
        name:"Cola",
        groupId:1,
        groupName:"main",
        unit:"pcs",
        price:100,
        quantity:1,
        result:100,
        remark:"ok",
    }]
}
//-----------------------------------------
const initData= {
                    shopInit,userInit,
                    basicDataInit,tableTemplate,
                    productInit,groupInit,
                    customerInit,
                    billInit
                }

module.exports = initData;