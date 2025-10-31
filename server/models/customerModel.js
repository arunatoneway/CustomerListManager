const mongoose = require('mongoose')


const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    contactinfo:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
    
})


module.exports = new mongoose.model('customers',customerSchema)