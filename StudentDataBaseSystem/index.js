const express = require("express");
const app = express();
const path = require("path")
const ejs = require("ejs");
const port = 8080;

const mongoose = require("mongoose");
const Student = require("./models/product");
mongoose.connect('mongodb://localhost:27017/studentDb')
    .then(function(){
        console.log("data base is working!");
        
    })
    .catch(function(err){
        console.log(err);
        console.log("database is not working!");
    });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));



app.get('/students', async function(req,res){
    const students = await Student.find({});
    res.render('index', {students});
});

app.listen(port, function(err){
    if(err){
        console.log("not working");
        console.log(err);
    }else{
        console.log(`Working properly on the port ${port}`);
    }
});