const express = require("express");
const app = express();

app.get("/", function(req, res){
    //console.log(req);
    res.send("<h1> hello </h1>");
});

app.get("/contact", function(req,res){
    res.send("contact me: tarunsingh6397@gmail.com");
});

app.get("/about", function(req, res){
    res.send("this is owned by tarun singh which is having strong fundamental of data structure and algorithm");
});

app.get("/checknodemon",function(req,res){
    res.send("nodemon can restart the server if it found any sort of change in the source code.");
});

app.listen(3000, function(){
    console.log("server started on port 3000");
});
