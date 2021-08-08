const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    id:{type:Number,required:true}, //ไอดี
    title:{type:String}, // คำนำหน้า
    name:{type:String}, // อ 
    surname:{type:String}, // ชื่อ 
    phone:{type:[String]}, // โทรศัพท์
    remark:{type:String}, // หมายเหตุ

    userId:{type:String},
    shopId:{type:String,required:true},
});

CustomerSchema.index({id:1,name:1})

module.exports = Customer = mongoose.model('Customer', CustomerSchema);