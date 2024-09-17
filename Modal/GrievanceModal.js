//import mongoose
const mongoose=require('mongoose')

const complaintSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    timeStamp:{
        type:String,
        required:true
    },
    issue:{
        type:String,
        required:true
    },
})
const complaints=mongoose.model("complaints",complaintSchema)
module.exports=complaints