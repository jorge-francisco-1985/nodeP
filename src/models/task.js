const mongoose=require ("mongoose");
const {Schema}=mongoose;

const Task= new Schema({
    titulo:String,
    descripcion:String

},{
    versionKey: false // You should be aware of the outcome after set to false
});
module.exports=mongoose.model('Task',Task);