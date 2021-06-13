const express = require('express');
const path = require('path');
const port=8000;
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//Middleware
app.use(express.urlencoded());

//Understanding the functioning of middleware
//middleware1
app.use(function(req,res,next){
    req.myName="Arpan";
    console.log("Middleware 1 called");
    next();
});
//middleware2
app.use(function(req,res,next){
    console.log("Middleware 2 called");
    console.log("My name called from MW2 : ",req.myName);
    next();
});

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

//Home page of website
app.get('/',function(req,res){
    //console.log(__dirname);
    res.render('home',{
        title:"My Contact List",
        contact_list:contactList
    });
});

//Adding Contacts to array from form
app.post('/create-contact',function(req,res){
    //console.log(req.body.name);
    /*
    contactList.push({
        name:req.body.name,
        phone:req.body.phone
    })
    */

    contactList.push(req.body);

    //return re.redirect('/');
    return res.redirect('back');
});

app.listen(port,function(err){
    if(err){
        console.log('Error in running the server',err);
        return;
    }
    console.log('Yup! my Express Server is running on Port :',port);
});