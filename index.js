var express = require("express");
var app = express();
var port = 4000

app.get('/',(req,res)=>{
    res.send({
        message:"Backend project starts now in node js"
    })
})
app.listen(port,()=>{
    console.log("Our project backend has been started")
})