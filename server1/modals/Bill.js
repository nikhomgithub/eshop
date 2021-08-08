const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BillSchema = new Schema({
    id:{type:Number,required:true}, // ไอดี
    date:{type:Date}, // วันที่

    customerId:{type:Number}, // ไอดีคู่ค้า
    title:{type:String}, // คำนำหน้า
    name:{type:String}, // ชื่อ
    surname:{type:String}, // ชื่อ
    phone:{type:[String]}, // โทรศัพท์ 
   
    remark:{type:String}, // หมายเหตุ
    
    userId:{type:String},
    shopId:{type:String,required:true}, //

    total:{type:Number}, // รวม
    reduction:{type:Number}, // ส่วนลด
    grandTotal:{type:Number}, // สุทธิ

    detail:{   // รายละเอียด
        type: [{
            id:{type:Number}, // ไอดี
            barcode:{type:String}, // บาร์โค้ด
            name:{type:String}, // ชื่อ
            groupId:{type:Number}, // ไอดีกลุ่ม
            groupName:{type:String}, // ชื่อกลุ่ม
            unit:{type:String}, // หน่วย
            price:{type:Number}, // ราคา 
            quantity:{type:Number}, // จำนวน 
            result:{type:Number},
            remark:{type:String}, //หมายเหตุ
        }],        
    }
});

BillSchema.index({id:1,groupName:1,name:1})

module.exports = Bill = mongoose.model('Bill', BillSchema);