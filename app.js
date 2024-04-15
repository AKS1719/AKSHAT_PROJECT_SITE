const express = require("express");
const path = require("path");
const app = express();

app.use('/dashboard',express.static("Dashboard"));

app.set('view engine',"pug")
app.set('views',path.join(__dirname,'views'))


app.get('/',(req,res)=>{
    res.status(200).render("index");
});

app.get('/clock',(req,res)=>{
    res.status(200).render("clock");
});

app.get('/music',(req,res)=>{
    res.status(200).render("msp");
});

app.listen(80,()=>{
    console.log("app listnening on port 80");
});