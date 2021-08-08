
const any10={
    pattern:/^[^~<>{}%$&|!]{0,10}$/gi,
    message:"Invalid char or over limit of 10 chars"
}
const any20={
    pattern:/^[^~<>{}%$&|!]{0,20}$/gi,
    message:"Invalid char or over limit of 20 chars"
}
const any50={
    pattern:/^[^~<>{}%$&|!]{0,50}$/gi,
    message:"Invalid char or over limit of 50 chars"
}
const any100={
    pattern:/^[^~<>{}%$&|!]{0,100}$/gi,
    message:"Invalid char or over limit of 100 chars"
}
const any150={
    pattern:/^[^~<>{}%$&|!]{0,150}$/gi,
    message:"Invalid char or over limit of 150 chars"
}
const any200={
    pattern:/^[^~<>{}%$&|!]{0,150}$/gi,
    message:"Invalid char or over limit of 200 chars"
}
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

const shop={
    shopName:       {type:"string", validate:valBasic,  regex:any20},
    password:       {type:"string", validate:valBasic,  regex:any20},  
    ownerName:      {type:"string", validate:valBasic,  regex:any20},
    ownerPassword:  {type:"string", validate:valBasic,  regex:any20},
    ownerEmail:     {type:"string", validate:valBasic,  regex:any20},
}

const user={
    id:             {type:"number", validate:valBasic,  regex:any20},
    username:       {type:"string", validate:valBasic,  regex:any20},
    password:       {type:"string", validate:valBasic,  regex:any20},
    userLevel:      {type:"string", validate:valBasic,  regex:any20},
    name:           {type:"string", validate:valBasic,  regex:any20},
    surname:        {type:"string", validate:valBasic,  regex:any20},
}

const group={
    id:             {type:"number", validate:valBasic,  regex:any20},
    groupName:      {type:"string", validate:valBasic,  regex:any20},
    parentId:       {type:"number", validate:valBasic,  regex:any20},
    children:       {type:"array", validate:valArray,  regex:any20},
}

const product={
    id:             {type:"number", validate:valBasic,  regex:any20},
    barcode:        {type:"string", validate:valBasic,  regex:any20},
    name:           {type:"string", validate:valBasic,  regex:any20},
    groupId:        {type:"number", validate:valBasic,  regex:any20},
    groupName:      {type:"string", validate:valBasic,  regex:any20},

    photoUrl1:      {type:"fileName", validate:valArray,regex:any100},
    unit:           {type:"string", validate:valBasic,  regex:any20},
    price:          {type:"number", validate:valBasic,  regex:any20},
    remark:         {type:"string", validate:valBasic,  regex:any150}
}



const customer={
    id:             {type:"number", validate:valBasic,  regex:any20},
    title:          {type:"string", validate:valBasic,  regex:any20},
    name:           {type:"string", validate:valBasic,  regex:any20},
    surname:        {type:"string", validate:valBasic,  regex:any20},
    phone:          {type:"array", validate:valArray,  regex:any20},
    remark:         {type:"string", validate:valBasic,  regex:any100},
}

const bill={
    id:           {type:"number", validate:valBasic,regex:any20},
    date:         {type:"date", validate:valBasic,  regex:any100},
    customerId:   {type:"number", validate:valBasic,  regex:any20},
    title:        {type:"string", validate:valBasic,  regex:any20},
    name:         {type:"string", validate:valBasic,  regex:any20},
    surname:      {type:"string", validate:valBasic,  regex:any20},
    phone:        {type:"array", validate:valArray,  regex:any20},
    remark:        {type:"string", validate:valBasic,regex:any100},
    total:         {type:"number", validate:valBasic,regex:any20},
    reduction:     {type:"number", validate:valBasic,regex:any20},
    grandTotal:    {type:"number", validate:valBasic,regex:any20},

  
    detail:         {type:"arrayObject",children:{
        id:         {type:"number", validate:valBasic,  regex:any20},
        barcode:    {type:"string", validate:valBasic,  regex:any20},
        name:       {type:"string", validate:valBasic,  regex:any20},
        groupId:    {type:"number", validate:valBasic,  regex:any20},
        groupName:  {type:"string", validate:valBasic,  regex:any20},
        unit:       {type:"string", validate:valBasic,  regex:any20},
        price:      {type:"number", validate:valBasic,  regex:any20},
        quantity:   {type:"number", validate:valBasic,  regex:any20},
        result:     {type:"number", validate:valBasic,  regex:any20},
        remark:     {type:"string", validate:valBasic,  regex:any20},
    }}

}

const basicData={
    id:          {type:"number", validate:valBasic,  regex:any20},
    title:       {type:"string", validate:valArray,  regex:any20},
    unit:        {type:"string", validate:valArray,  regex:any20},
    userLevel:   {type:"string", validate:valArray,  regex:any20},
    remark:      {type:"string", validate:valBasic,  regex:any20},
    routeAuth:   {type:"arrayObject",children:{

        id:{type:"number", validate:valBasic,  regex:any20},
        routeAddress:{type:"string", validate:valBasic,  regex:any100},
        routeName:{type:"string", validate:valBasic,  regex:any50},
        userLevel:{type:"string", validate:valArray,  regex:any20},
         
    }}
}


const validationTemplate={
    shop,user,
    group,product,
    customer,bill,
    basicData,
}

module.exports = validationTemplate
