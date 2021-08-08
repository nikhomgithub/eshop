const productTableTemplate={
      id            :
        { lb:'ID',     type:"number",
          width:65,   showCol:true,  showColHead:true,    
        },
      barcode           :
        { lb:'bacode',type:"string",
          width:65,   showCol:true,  showColHead:true,    
        },
      name      :
        { lb:'name',type:"string",
          width:100,   showCol:true,  showColHead:true,      
        },
      groupId      :
        { lb:'groupId',type:"number",
          width:40,   showCol:true,  showColHead:true,      
        },  
      groupName      :
        { lb:'groupName',type:"string",
          width:60,   showCol:true,  showColHead:true,      
        }, 
      unit      :
        { lb:'unit',type:"string",
          width:40,   showCol:true,  showColHead:true,      
        },
      price     :
        { lb:'price',     type:"number",
          width:60,   showCol:true,  showColHead:true,    
        },
      remark      :
        { lb:'remark',type:"string",
          width:200,   showCol:true,  showColHead:true,      
        },  
      photoUrl1      :
        { lb:'photo',type:"arrayPhoto",
          width:200,   showCol:true,  showColHead:true,
        },
}
//======================
const customerTableTemplate={
  id            :
    { lb:'ID',     type:"number",
      width:40,   showCol:true,  showColHead:true,    
    },
  title           :
    { lb:'title',type:"string",
      width:60,   showCol:true,  showColHead:true,    
    },
  name      :
    { lb:'name',type:"string",
      width:100,   showCol:true,  showColHead:true,      
    },
  surname      :
    { lb:'surname',type:"string",
      width:100,   showCol:true,  showColHead:true,      
    },  
  phone         :
    { lb:'phone', type:"array",
      width:120,   showCol:true,  showColHead:true,      
    },
  remark      :
    { lb:'remark',type:"string",
      width:200,   showCol:true,  showColHead:true,      
    }
  
}
//============================
const billTableTemplate={
    id            :
      { lb:'ID',     type:"number",
        width:40,   showCol:true,  showColHead:true,    
      },
    date           :
      { lb:'date',type:"date",
      width: 90,   showCol:true,  showColHead:true,    
      }, 

    customerId      :
      { lb:'customerId',type:"number",
        width:60,   showCol:true,  showColHead:true,      
      },  
    title          :
      { lb:'title',type:"string",
        width:60,   showCol:true,  showColHead:true,    
      },
    name      :
      { lb:'name',type:"string",
        width:100,   showCol:true,  showColHead:true,      
      },
    surname      :
      { lb:'surname',type:"string",
        width:100,   showCol:true,  showColHead:true,      
      },
    phone         :
      { lb:'phone', type:"array",
      width:110,   showCol:true,  showColHead:true,      
      }, 
    remark      :
      { lb:'remark',type:"string",
        width:200,   showCol:true,  showColHead:true,      
      }, 
    total            :
    { lb:'total',     type:"number",
      width:70,   showCol:true,  showColHead:true,showSum:true     
    },
    reduction           :
      { lb:'reduction',     type:"number",
        width:70,   showCol:true,  showColHead:true, showSum:true   
      },
    grandTotal            :
      { lb:'grandTotal',     type:"number",
        width:80,   showCol:true,  showColHead:true, showSum:true    
      },
  }
//============================
//======================
const productDetailTableTemplate={
  icon: {lb: "icon",type: "icon", width: 60, showCol: true, showColHead: true},
  id: {lb: "ID",type: "number", width: 60, showCol: true, showColHead: true},
  barcode: { lb: "barcode",type: "string", width: 100, showCol: true, showColHead: true},
  name: {lb: "name",type: "string", width: 240, showCol: true, showColHead: true},
  groupId: {lb: "groupId",type: "number", width: 60, showCol: true, showColHead: true },
  groupName: {lb: "groupName",type: "string", width: 90, showCol: true, showColHead: true},
  quantity: {lb: "quantity",type: "number", width: 60, showCol: true, showColHead: true,showSum:true},
  unit: {lb: "unit",type: "string", width: 80, showCol: true, showColHead: true},
  price: {lb: "price",type: "number", width: 100, showCol: true, showColHead: true},
  result: {lb: "result",type: "number", width: 100, showCol: true, showColHead: true,showSum:true},
  remark: {lb: "remark",type: "string", width: 200, showCol: true, showColHead: true},
}

const basicDataTableTemplate={
  id            :
  { lb:'ID',     type:"number",
      width:50,   showCol:true,  showColHead:true,    
  },

  routeAddress            :
  { lb:'url',     type:"string",
      width:200,   showCol:true,  showColHead:true,    
  },
  routeName           :
  { lb:'routeName',type:"string",
      width:100,   showCol:true,  showColHead:true,    
  },
  userLevel           :
  { lb:'userLevel',type:"array",
      width:350,   showCol:true,  showColHead:true,    
  },

}

const tableTemplate = {
    basicDataTableTemplate,
    productTableTemplate,productDetailTableTemplate,
    customerTableTemplate,billTableTemplate,
}

module.exports = tableTemplate
