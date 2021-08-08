const validationTemplate =require('../middleware/validation/validationTemplate')
const initData = require('../data/initData/initData')
//const restoreData = require('../data/restoreData/restoreData')

const shop={
    modal:'../modals/Shop',
    initData:initData.shopInit,
    //restoreData:restoreData.shopRestore,
    backupFolder:'./data/backupData/',
    addLimit:5,
    tokenName:"shopToken",
    routeName:"shop",
    folder:"upload/shop",
    valTemplate:validationTemplate.shop
}
const user={
    modal:'../modals/User',
    initData:initData.userInit,
    //restoreData:restoreData.userRestore,
    backupFolder:'./data/backupData/',
    addLimit:5,
    tokenName:"userToken",
    routeName:"user",
    folder:"upload/user",
    valTemplate:validationTemplate.user
}
const basicData={
    modal:'../modals/BasicData',
    initData:initData.basicDataInit,
    //restoreData:restoreData.basicDataRestore,
    backupFolder:'./data/backupData/',
    //dateIn: "2012-10-10"
    addLimit:5,
    tokenName:"",
    routeName:"basicdata",
    folder:"upload/basicdata",
    valTemplate:validationTemplate.basicData
}
const tableTemplate={
    modal:'../modals/TableTemplate',
    initData:initData.tableTemplate,
    //restoreData:restoreData.tableTemplateRestore,
    backupFolder:'./data/backupData/',

    //dateIn: "2012-10-10"
    addLimit:5,
    tokenName:"",
    routeName:"tabletemplate",
    folder:"upload/tabletemplate",
    valTemplate:null
}
const product={
    modal:'../modals/Product',
    initData:initData.productInit,
    //restoreData:restoreData.productRestore,
    backupFolder:'./data/backupData/',

    //dateIn: "2012-10-10"
    addLimit:5,
    tokenName:"",
    routeName:"product",
    folder:"upload/product",
    valTemplate:validationTemplate.product
}
const group={
    modal:'../modals/Group',
    initData:initData.groupInit,
    //restoreData:restoreData.groupRestore,
    backupFolder:'./data/backupData/',

    //dateIn: "2012-10-10"
    addLimit:5,
    tokenName:"",
    routeName:"group",
    folder:"upload/group",
    valTemplate:validationTemplate.group
}
const customer={
    modal:'../modals/Customer',
    initData:initData.customerInit,
    //restoreData:restoreData.customerRestore,
    backupFolder:'./data/backupData/',

    //dateIn: "2012-10-10"
    addLimit:5,
    tokenName:"",
    routeName:"customer",
    folder:"upload/customer",
    valTemplate:validationTemplate.customer
}

const bill={
    modal:'../modals/Bill',
    initData:initData.billInit,
    //restoreData:restoreData.billRestore,
    backupFolder:'./data/backupData/',

    //dateIn: "2012-10-10"
    addLimit:5,
    tokenName:"",
    routeName:"bill",
    folder:"upload/bill",
    valTemplate:validationTemplate.bill
}


const params={shop,user,basicData,tableTemplate,
             product,group,customer,bill}

module.exports=params