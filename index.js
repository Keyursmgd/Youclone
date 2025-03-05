var express = require("express");
const { connDB } = require(".\\connections\\conn.js");
var app = express();
var port = 4000

app.get('/',(req,res)=>{
    res.send({
        message:"Backend project starts now in node js"
    })
})
app.listen(port, async()=>{
    console.log("Our project backend has been started")
    const db = await connDB();
})