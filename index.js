const express = require('express');
const path = require('path');
const port=8000;
//database connecting
const db=require('./config/mongoose');
const Contact=require('./models/contact');
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//Middleware
app.use(express.urlencoded());

//adding static files
app.use(express.static('assets'))


//Home page of website
app.get('/',function(req,res){
    //console.log(__dirname);

    //Fetching Data from DB
    Contact.find({},function(err,contacts){
        if(err){
            console.log('Error in fetching contacts from database');
            return;
        }
        return res.render('home',{
            title:"My Contact List",
            contact_list:contacts
        });
    });
});

//Adding Contacts to DB
app.post('/create-contact',function(req,res){
    
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err,newContact){
        if(err){
            console.log('Error in Creating Contact');
            return;
        }
        console.log('****',newContact);
        return res.redirect('back');
    });
});

//Creating for deleting contact from array
app.get('/delete-contact/',function(req,res){
    //console.log(req.query);

    //get id from query in ul
    let id=req.query.id;

    //find the contact in db using id and delete
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log('Error in deleting an object from db');
            return;
        }
        return res.redirect('back');
    });
});

app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
        return;
    }
    console.log('Yup! my Express Server is running on Port :',port);
});