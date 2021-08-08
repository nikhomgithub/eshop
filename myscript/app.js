const axios = require('axios')

const myheader={headers: {'Content-Type': 'application/json'}}

const mainUrl="localhost:3001"
const bkDate="24_05_2021"

const qry = {shopName:"star9",password:"star9"}
const shopQry={...qry,filePath:`backupData/${bkDate}_shop.json`} 
const userQry={...qry,filePath:`backupData/${bkDate}_user.json`} 
const basicdataQry={...qry,filePath:`backupData/${bkDate}_basicdata.json`} 
const tableTemplateQry={...qry,filePath:`backupData/${bkDate}_tabletemplate.json`} 
const productQry={...qry,filePath:`backupData/${bkDate}_product.json`} 
const groupQry={...qry,filePath:`backupData/${bkDate}_group.json`} 
const customerQry={...qry,filePath:`backupData/${bkDate}_customer.json`} 
const billQry={...qry,filePath:`backupData/${bkDate}_bill.json`} 

const getRestore = async () => {
  try {

    const result=await axios.get(`http://${mainUrl}/shop/init`,myheader)
    const promiseShop=await axios.post(`http://${mainUrl}/shop/restore`,shopQry,myheader)
    const promiseUser=await axios.post(`http://${mainUrl}/user/restore`,userQry,myheader)
    const promiseBasicData=await axios.post(`http://${mainUrl}/basicdata/restore`,basicdataQry,myheader)
    const promiseTableTemplate=await axios.post(`http://${mainUrl}/tabletemplate/restore`,tableTemplateQry,myheader)
    const promiseProduct=await axios.post(`http://${mainUrl}/product/restore`,productQry,myheader)
    const promiseCustomer=await axios.post(`http://${mainUrl}/customer/restore`,customerQry,myheader)
    const promiseGroup=await axios.post(`http://${mainUrl}/group/restore`,groupQry,myheader)
    const promiseBill=await axios.post(`http://${mainUrl}/bill/restore`,billQry,myheader)
  } catch (error) {
    console.log(error)
  }
}

console.log('test')
getRestore()