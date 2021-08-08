const patternNumber=/^\d{1,30}$/gi
const patternString=/^[ก-๙\w\+\-\*\/\\.=]{1,200}$/gi
const patternEmail=/^[\w@\.\-]{1,30}$/gi
const patternDate=/^\d{4}-\d{2}-\d{2}$/gi
const patternFileName=/^[\w\-\*\/\.\\=]{1,200}$/gi
const patternBoolean=/^(true)|(false)$/gi
const patternWildCard=/.{0,200}/gi
//const patternNumber=/^(\d{1,30})|(\d{1,15}\.\d{1,15})|(\d{1,29}.)$/gi

const valBasic= (pttn,str)=>{
    return new RegExp(pttn).test(str)
}

const valArray= (pttn,array)=>{
    let tempResult=true

    for (let i=0; i<array.length;i++){
        tempResult= new RegExp(pttn).test(array[i])
        if(!tempResult){
            break
        }
    }
    return tempResult
}
const valNone=()=>{
  return true
}

const shopSignUpState={
  shopName:     {stType:"string", validate:valBasic,  pattern:patternString, lb:"shopName"},
  password:     {stType:"string", validate:valBasic,  pattern:patternString, lb:"password"},
  ownerName:    {stType:"string", validate:valBasic,  pattern:patternString, lb:"ownerName"},
  ownerPassword:{stType:"string", validate:valBasic,  pattern:patternString, lb:"ownerPassword"},
  ownerEmail:   {stType:"string", validate:valBasic,  pattern:patternEmail, lb:"email"},
}

const shopLogInState={
  shopName:     {stType:"string", validate:valBasic,  pattern:patternString, lb:"shopName"},
  password:     {stType:"string", validate:valBasic,  pattern:patternString, lb:"password"},
}

const shopChangePasswordState={
  shopName:     {stType:"string", validate:valBasic,  pattern:patternString, lb:"shopName"},
  password:     {stType:"string", validate:valBasic,  pattern:patternString, lb:"password"},
  newPassword1: {stType:"string", validate:valBasic,  pattern:patternString, lb:"new password"},
  newPassword2: {stType:"string", validate:valBasic,  pattern:patternString, lb:"confirm new password"},
}

const addUserState={
  id:       {stType:"string", validate:valBasic,  pattern:patternNumber, lb:"ID"},
  username: {stType:"string", validate:valBasic,  pattern:patternString, lb:"username"},
  password: {stType:"string", validate:valBasic,  pattern:patternString, lb:"password"},
  userLevel:{stType:"string", validate:valBasic,  pattern:patternString, lb:"userLevel"},
  name:     {stType:"string", validate:valBasic,  pattern:patternString, lb:"name"},
  surname:  {stType:"string", validate:valBasic,  pattern:patternString, lb:"surname"},
}

const logInState={
  username: {stType:"string", validate:valBasic,  pattern:patternString, lb:"username"},
  password: {stType:"string", validate:valBasic,  pattern:patternString, lb:"password"},
}

const changePasswordState={
  username: {stType:"string", validate:valBasic,  pattern:patternString, lb:"username"},
  password: {stType:"string", validate:valBasic,  pattern:patternString, lb:"password"},
  newPassword1: {stType:"string", validate:valBasic,  pattern:patternString, lb:"new password"},
  newPassword2: {stType:"string", validate:valBasic,  pattern:patternString, lb:"confirm new password"},
}

const customerState={
  id: {stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"ID"},
  title:{stType:"string", validate:valBasic,  pattern:patternString, lb:"title"},
  name:{stType:"string", validate:valBasic,  pattern:patternString, lb:"name"},
  surname:{stType:"string", validate:valBasic,  pattern:patternString, lb:"surname"},
  phone:{stType:"array",  validate:valArray,  pattern:patternNumber, lb:"phone"},
  remark:{stType:"string",  validate:valBasic,     pattern:patternString, lb:"remark"},
}

const groupState={
  id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"ID"},
  groupName:{stType:"string", validate:valBasic,  pattern:patternString, lb:"product type"},
  children:{stType:"array",  validate:valArray,  pattern:patternNumber, lb:"children"},
  parentId:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"parent ID"},
  allDeleteId:{stType:"array",  validate:valArray,  pattern:patternNumber, lb:"all delete ID"},
}

const productState={
  id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"ID"},
  barcode:{stType:"string", validate:valBasic,  pattern:patternString, lb:"barcode"},
  name:{stType:"string", validate:valBasic,  pattern:patternString, lb:"name"},
  
  groupId:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"group ID"},
  groupName:{stType:"string", validate:valBasic,  pattern:patternString, lb:"product Type"},

  unit:{stType:"string", validate:valBasic,  pattern:patternString, lb:"unit"},
  price:{stType:"number", validate:valBasic, pattern:patternNumber, lb:"price"},
  remark:{stType:"string", validate:valBasic,  pattern:patternString, lb:"remark"},

  file1:{stType:"file",validate:valNone,pattern:null, lb:"file1"},
  photoUrl1:{stType:"array",  validate:valArray,    pattern:patternFileName, lb:"photo 1"},
}

const basicDataState={
  id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"ID"},
  title:{stType:"array", validate:valArray, pattern:patternString, lb:"title"},
  unit:{stType:"array", validate:valArray, pattern:patternString, lb:"unit"},
  userLevel:{stType:"array", validate:valArray, pattern:patternString, lb:"user level"},

  routeAuth:{stType:"arrayObject",stChildren:{
      id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"ID"},
      routeAddress:{stType:"string", validate:valBasic, pattern:patternString, lb:"url"},
      routeName:{stType:"string", validate:valBasic, pattern:patternString, lb:"route name"},
      userLevel:{stType:"array", validate:valArray, pattern:patternString, lb:"user level"},
  }}

}

const routeAuthState={
    id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"ID"},
    routeAddress:{stType:"string", validate:valBasic, pattern:patternString, lb:"url"},
    routeName:{stType:"string", validate:valBasic, pattern:patternString, lb:"route name"},
    userLevel:{stType:"array", validate:valArray, pattern:patternString, lb:"user level"},
}


const billState={
  id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"ID"},
  date:{stType:"date",  validate:valBasic,  pattern:patternDate, lb:"date"},

  customerId: {stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"customer ID"},
  title:{stType:"string", validate:valBasic,  pattern:patternString, lb:"title"},
  name:{stType:"string", validate:valBasic,  pattern:patternString, lb:"name"},
  surname:{stType:"string", validate:valBasic,  pattern:patternString, lb:"surname"},
  phone:{stType:"array",  validate:valArray,  pattern:patternNumber, lb:"phone"},

  remark:{stType:"string",  validate:valBasic,     pattern:patternString, lb:"remark"},

  total:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"total"},
  reduction:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"reduction"},
  grandTotal:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"grand total"},

  detail:{stType:"arrayObject",stChildren:{
    id:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"ID"},
    barcode:{stType:"string", validate:valBasic, pattern:patternString, lb:"barcode"},
    name:{stType:"string", validate:valBasic, pattern:patternString, lb:"name"},
    groupId:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"group ID"},
    groupName:{stType:"string", validate:valBasic, pattern:patternString, lb:"product type"},
    unit:{stType:"string", validate:valBasic, pattern:patternString, lb:"unit"},
    price:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"price"},
    quantity:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"quantity"},
    result:{stType:"number",  validate:valBasic,  pattern:patternNumber, lb:"result"},
    remark:{stType:"string",  validate:valBasic,  pattern:patternString, lb:"remark"},
  }},


}


const StateTemplate={
  shopSignUpState,shopLogInState,shopChangePasswordState,
  addUserState,logInState,changePasswordState,
  customerState,
  groupState,productState,
  basicDataState,routeAuthState,
  billState
}

export default StateTemplate
