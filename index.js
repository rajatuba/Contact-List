const express = require('express');
const path = require('path');
const port=8000;
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

var contactList=[
    {
        name : "Arpan",
        phone : "111111111"
    },
    {
        name : "Tony",
        phone : "0132344654"
    },
    {
        name : "Rajat",
        phone : "78746746"
    }
]

app.get('/',function(req,res){
    console.log(__dirname);
    res.render('home',{
        title:"My Contact List",
        contact_list:contactList
    });
});

app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
        return;
    }
    console.log('Yup! my Express Server is running on Port :',port);
});