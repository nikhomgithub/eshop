import React from 'react';
import MainContext from '../../context/MainContext'


const shopSignUpForm={
    shopName:
        {  lb:'shop name', 
            templateType:"string" , 
            cName:"xc6 sc12 p-2 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"text", 
            placeholder:'', 
            autoFocus:"autoFocus"
        },
    password:
        {   lb:'password', 
            templateType:"string" , 
            cName:"xc6 sc12 p-2 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"password", 
            placeholder:'',   
        },
    ownerName:
        {   lb:'owner name', 
            templateType:"string" , 
            cName:"xc6 sc12 p-2 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"text", 
            placeholder:'', 
        },
    ownerPassword:
        {   lb:'owner password', 
            templateType:"string" , 
            cName:"xc6 sc12 p-2 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"password", 
            placeholder:'',   
        },
    ownerEmail: {  
            lb:'owner email', 
            templateType:"string" , 
            cName:"xc6 sc12 p-2 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"text", 
            placeholder:'',   
        },     
}

//====================

const shopLogInForm={
    shopName:
        {  lb:'shop name', 
            templateType:"string" , 
            cName:"xc6 sc12 p-1 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"text", 
            placeholder:'', 
            autoFocus:"autoFocus"
        },
    password:
        {   lb:'password', 
            templateType:"string" , 
            cName:"xc6 sc12 p-1 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"password", 
            placeholder:'',   
        },

}

//=======================
const shopChangePasswordForm={
    shopName:
        {   lb:'shop name', 
            templateType:"string" , 
            cName:"xc6 sc12 p-1 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"text", 
            placeholder:'', 
            autoFocus:"autoFocus"
        },
    password:
        {   lb:'password', 
            templateType:"string" , 
            cName:"xc6 sc12 p-1 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"password", 
            placeholder:'',   
        },
    newPassword1:
        {   lb:'new password', 
            templateType:"string" , 
            cName:"xc6 sc12 p-1 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"password", 
            placeholder:'',   
        },
    newPassword2:
        {   lb:'confirm new password', 
            templateType:"string" , 
            cName:"xc6 sc12 p-1 bd-lightGray",  
            subCName:["xc4 div-center","xc8 p-2 div-start"], 
            inputType:"password", 
            placeholder:'',   
        },
}

const addUserForm={
    id:{
        lb:'ID', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus"
    },
    username:{
        lb:'username', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:''
    },
    password:{
        lb:'password', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"password", 
        placeholder:'',   
    },
    userLevel:{
        lb:'user level', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"select", 
        placeholder:'', 
        //selectObj:["นาย","นาง"]
        selectDataKey:"basicData",
        selectObj:'userLevel'
    },
    name:{
        lb:'name', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    surname:{
        lb:'surname', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    }
}

const logInForm={
    username:{
        lb:'username', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'',
        autoFocus:"autoFocus"
    },
    password:{
        lb:'password', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"password", 
        placeholder:'',   
    }    
}

const changePasswordForm={
    username:{
        lb:'username', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
        autoFocus:"autoFocus"
    },
    password:{
        lb:'password', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"password", 
        placeholder:'',   
    },
    newPassword1:{   
        lb:'new password', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"password", 
        placeholder:'',   
    },
    newPassword2:{   
        lb:'confirm new password', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"password", 
        placeholder:'',   
    },
}


const customerForm={
    id:{
        lb:'ID', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus",
        //calculation:{method:"autoId"},
    },
    title:{
        lb:'title', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"select", 
        placeholder:'', 
        selectDataKey:"basicData",
        selectObj:'title'
    },
    name:{
        lb:'name', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    surname:{
        lb:'surname', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    phone:{
        lb:'phone', 
        templateType:"array" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    remark:{
        lb:'remark', 
        templateType:"string" , 
        cName:"xc12 sc12 p-1 bd-lightGray",  
        subCName:["xc2 alignSelfStart","xc10 div-start"], 
        inputType:"textarea", 
        placeholder:'', 
        textRow:3
    }
}

const groupForm={
    id:{
        lb:'ID', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 p-2 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus"
    },
    groupName:{
        lb:'product type', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 p-2 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    parentId:{
        lb:'parent ID', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 p-2 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //disabled:"disabled"
    },
}
//======================================
const productForm={
    id:{
        lb:'ID', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus",
        //calculation:{method:"autoId"},
    },
    barcode:{
        lb:'barcode', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    name:{
        lb:'name', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    //==================
    icon:{
        lb:"",
        templateType:"icon",
        cName:"xc4 sc12 p-1",  
        subCName:["xc6 div-center","xc6 div-start"], 
        inputType:"searchIcon",
        iconActionIdx:0,
    },
    groupId:{
        lb:'group ID', 
        templateType:"string" , 
        cName:"xc4 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //unchangeable:true
        //disabled:"disabled"
    },
    groupName:{
        lb:'product Type', 
        templateType:"string" , 
        cName:"xc4 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
        //unchangeable:true
        //disabled:"disabled"
    },
    //==========================
    price:{
        lb:'price', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
    },
    unit:{
        lb:'unit', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"select", 
        placeholder:'', 
        selectDataKey:"basicData",
        selectObj:'unit'
    },
    remark:{
        lb:'remark', 
        templateType:"string" , 
        cName:"xc12 sc12 p-1 bd-lightGray",  
        subCName:["xc2 alignSelfStart","xc10 div-start"], 
        inputType:"textarea", 
        placeholder:'', 
        textRow:3
    }
}

//====================================
const basicDataForm={
    title:{
        lb:'title', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
    }, 
    unit:{
        lb:'unit', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
    }, 
    userLevel:{
        lb:'user level', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
    }
}

const routeAuthForm={
    id:{
        lb:'ID', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus"
    },
    routeAddress:{
        lb:'url', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    routeName:{
        lb:'route name', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    userLevel:{
        lb:'user level', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        //inputType:"text",
        inputType:"select", 
        placeholder:'', 
        selectDataKey:"basicData",
        selectObj:'userLevel'
    }
}


const billForm={
    id:{
        lb:'ID', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"number", 
        placeholder:'', 
        autoFocus:"autoFocus",
        //calculation:{method:"autoId"},
    },
    date:{
        lb:'date', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"date", 
        placeholder:'', 
    },
    iconCustomer:{
        lb:"find customer",
        templateType:"icon",
        cName:"xc12 sc12 p-1",  
        subCName:["xc2 div-center","xc10 div-start"], 
        inputType:"searchIcon",
        iconActionIdx:0,
    },
    customerId:{
        lb:'customer ID', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //autoFocus:"autoFocus"
    },
    title:{
        lb:'title', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"select", 
        placeholder:'', 
        selectDataKey:"basicData",
        selectObj:'title'
    },
    name:{
        lb:'name', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    surname:{
        lb:'surname', 
        templateType:"string" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    phone:{
        lb:'phone', 
        templateType:"array" , 
        cName:"xc6 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    remark:{
        lb:'remark', 
        templateType:"string" , 
        cName:"xc12 sc12 p-1 bd-lightGray",  
        subCName:["xc2 alignSelfStart","xc10 div-start"], 
        inputType:"textarea", 
        placeholder:'', 
        textRow:3
    },

    total:{
        lb:'total', 
        templateType:"string" , 
        cName:"xc4 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        unchangeable:true,
        //calculation:{method:"total",param:["detail","price","quantity"]},
        //autoFocus:"autoFocus"
    },
    reduction:{
        lb:'reduction', 
        templateType:"string" , 
        cName:"xc4 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        //autoFocus:"autoFocus"
    },
    grandTotal:{
        lb:'grandtotal', 
        templateType:"string" , 
        cName:"xc4 sc12 p-1 bd-lightGray",  
        subCName:["xc4 div-center","xc8 p-2 div-start"], 
        inputType:"number", 
        placeholder:'', 
        unchangeable:true
        //calculation:{method:"grandTotal",param:["detail","price","quantity","reduction"]},
        //autoFocus:"autoFocus"
    },
    //=================
    detail:{
        lb: "detail",
        templateType:"arrayObjectInTable",
        cName:"",
        subFormTemplate:{
          icon:{
            //templateType:"icon",
            //subCName:[60],
            inputType:"icon",
            iconActionIdx:1,
          },
          id:{
            //lb:"ไอดี",
            //templateType:"number",
            //subCName:[60,""],
            inputType:"number",
            placeholder:"",
            aotuFocus:"autoFocus"
          },
          barcode:{
            //lb:"บาร์โค้ด",
            //templateType:"string",
            //subCName:[100,""],
            inputType:"text",
            placeholder:"", 
            nextEnter:{nextKey1:["detail",0,"quantity"],lastKey:null}
          },
          name:{
            //lb:"ชื่อ",
            //templateType:"string",
            //subCName:[240,""],
            inputType:"text",
            placeholder:"", 
          },
        
          groupId:{
            //lb:"ไอดีกลุ่ม",
            //templateType:"number",
            //subCName:[60,""],
            inputType:"number",
            placeholder:"",
            aotuFocus:"autoFocus"
          },
          groupName:{
            //lb:"ชื่อกลุ่ม",
            //templateType:"string",
            //subCName:[90,""],
            inputType:"text",
            placeholder:"", 
          },
          unit:{
            //lb:"หน่วย",
            //templateType:"string",
            //subCName:[80,""],
            inputType:"select",
            placeholder:"", 
            //selectObj:["นาย","นาง"]
            selectDataKey:"basicData",
            selectObj:'unit'
          },
          quantity:{
            //lb:"จำนวน",
            //templateType:"string",
            //subCName:[60,""],
            inputType:"number",
            placeholder:"", 
            nextEnter:{nextKey1:["detail",1,"barcode"],lastKey:"endForm"}
          },
          price:{
            //lb:"ราคา",
            //templateType:"number",
            //subCName:[100,""],
            inputType:"number",
            placeholder:"", 
          },
          result:{
            //lb:"รวม",
            //templateType:"number",
            //subCName:[100,""],
            inputType:"number",
            placeholder:"", 
            unchangeable:true,
            //calculation:{method:"multiply",param:["price","quantity"]},
            //disabled:"disabled"
          },
          remark:{
            //lb:"หมายเหตุ",
            //templateType:"string",
            //subCName:[200,""],
            inputType:"text",
            placeholder:"", 
          }
        }
      }
}


const FormTemplate={
    shopSignUpForm,shopLogInForm,shopChangePasswordForm,
    addUserForm,logInForm,changePasswordForm,
    customerForm,
    groupForm,productForm,basicDataForm,
    routeAuthForm,
    billForm
}

export default FormTemplate
//disabled:"disabled",
