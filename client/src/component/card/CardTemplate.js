


const billCard={
    id:{
        lb:'ID', 
        templateType:"string" , 
        cName:"flex-cetner-center xc2 sc12 p-1",  
        subCName:["xc4","xc8"], 
        inputType:"number", 

    },
    date:{
        lb:'date', 
        templateType:"string" , 
        cName:"xc4 sc12 p-1 ",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"thaiDate", 
    },

    customerId:{
        lb:'customer ID', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 ",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"number", 

    },
    title:{
        lb:'title', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 ",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"select", 
    },
    name:{
        lb:'name', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 ",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
    },
    surname:{
        lb:'surname', 
        templateType:"string" , 
        cName:"xc3 sc12 p-1 ",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
    },
    phone:{
        lb:'phone', 
        templateType:"array" , 
        cName:"xc3 sc12 p-1 ",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"text", 
        placeholder:'', 
    },
    remark:{
        lb:'remark', 
        templateType:"string" , 
        cName:"xc12 sc12 p-1 ",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"textarea", 
    },
    total:{
        lb:'total', 
        templateType:"string" , 
        cName:"xc4 sc12 p-1 ",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"number", 

    },
    reduction:{
        lb:'reduction', 
        templateType:"string" , 
        cName:"xc4 sc12 p-1 ",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"number", 

    },
    grandTotal:{
        lb:'grandTotal', 
        templateType:"string" , 
        cName:"xc4 sc12 p-1 ",  
        subCName:["xc4 div-center","xc8 div-start"], 
        inputType:"number", 
    },
    //=================

}

const CardTemplate={billCard}

export default CardTemplate