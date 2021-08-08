const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    id:{type:Number,required:true}, //ไอดีกลุ่ม
    groupName: {type: String,required:true}, //ชื่อกลุ่ม 
    children:{type:[Number]}, //กลุ่มย่อย
    parentId:{type:Number}, //ไอดีกลุ่มแม่

    userId:{type:String},
    shopId:{type:String,required:true},
});

GroupSchema.index({id:1,groupName:1})

module.exports = Group = mongoose.model('Group', GroupSchema);