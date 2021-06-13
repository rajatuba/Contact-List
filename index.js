const express = require('express');
const path = require('path');
const port=8000;
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    console.log(__dirname);
    res.render('home',{title:"My Contact List"});
});

app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
        return;
    }
    console.log('Yup! my Express Server is running on Port :',port);
});