const mongoose = require('mongoose');

//Creating Schema
const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

//Collection using above schema
const Contact=mongoose.model('Contact',contactSchema);

module.exports=Contact;