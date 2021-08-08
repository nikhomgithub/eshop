const productInputState=
{
    id:     {toCheck:false,min:0,max:0},
    barcode:{toCheck:false,value:""},
    name:   {toCheck:false,value:""},
    groupId:{toCheck:false,min:0,max:0},
    groupName:{toCheck:false,value:""},
    unit:   {toCheck:false,value:""},
    price:  {toCheck:false,min:0,max:0},
    remark: {toCheck:false,value:""},
  }

const customerInputState={
    id:{toCheck:false,min:0,max:0},
    title:{toCheck:false,value:""},
    name:{toCheck:false,value:""},
    surname:{toCheck:false,value:""},
    phone:{toCheck:false,value:""},
    remark:{toCheck:false,value:""},
  }


const billInputState={
  id:{toCheck:false,min:0,max:0},
  date:{toCheck:false,min:"2018-01-01",max:new Date().toISOString()},

  customerId:{toCheck:false,min:0,max:0},
  title:{toCheck:false,value:""},
  name:{toCheck:false,value:""},
  surname:{toCheck:false,value:""},
  phone:{toCheck:false,value:""},

  remark:{toCheck:false,value:""},

  total:{toCheck:false,min:0,max:0},
  reduction:{toCheck:false,min:0,max:0},
  grandTotal:{toCheck:false,min:0,max:0},

  detail_id:     {toCheck:false,min:0,max:0},
  detail_barcode:{toCheck:false,value:""},
  detail_name:   {toCheck:false,value:""},
  detail_groupId:{toCheck:false,min:0,max:0},
  detail_groupName:{toCheck:false,value:""},
  detail_unit:   {toCheck:false,value:""},

  detail_price:  {toCheck:false,min:0,max:0},
  detail_quantity: {toCheck:false,min:0,max:0},
  detail_result: {toCheck:false,min:0,max:0},
  detail_remark: {toCheck:false,value:""},

}

const inputState = {
    productInputState,
    customerInputState,
    billInputState,
}

export default inputState
