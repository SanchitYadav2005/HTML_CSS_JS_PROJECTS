const express = require("express");
const app = express();
const path = require("path")
const ejs = require("ejs");
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/students', function(req,res){
    res.render('index');
});

app.listen(port, function(err){
    if(err){
        console.log("not working");
        console.log(err);
    }else{
        console.log(`Working properly on the port ${port}`);
    }
});