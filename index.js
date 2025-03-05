const express = require("express");
const app = express();

const db = require('./models')



app.get('/',(req,res)=>{
    res.send({
        message:"Backend project starts now in node js"
    })
})
db.sequelize.sync().then((req) => {
    app.listen(4000, async()=>{
        console.log("Our project backend has been started");
    });
});
