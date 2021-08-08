const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    id:{type:Number,required:true}, // ไอดี
    barcode:{type:String}, // บาร์โค้ด
    name:{type:String}, // ชื่อ
    groupId: {type: Number}, // ไอดีกลุ่ม
    groupName: {type:String}, // ชื่อกลุ่ม
    unit:{type:String},  // หน่วย
    price:{ type:Number}, // ราคา
    remark:{type:String}, // หมายเหตุ
    photoUrl1:{type:[String]}, // 

    userId:{type:String},
    shopId:{type:String,required:true}, //

});

ProductSchema.index({id:1,name:1})

module.exports = Product = mongoose.model('Product', ProductSchema);