const express = require("express");
const app = express();
const ejs = require("ejs");
const port = 8080;

app.get('/students', function(req,res){
    res.send("Working!!")
})

app.listen(port, function(err){
    if(err){
        console.log("not working");
        console.log(err);
    }else{
        console.log(`Working properly on the port ${port}`);
    }
});