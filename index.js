const express = require("express");
const app = express();

const db = require('./models/index')


app.use(express.json())
const AuthRoutes = require("./Routes/user")

app.use('/auth', AuthRoutes);

db.sequelize.sync().then((req) => {
    app.listen(4000, async()=>{
        console.log("Our project backend has been started");
    });
});
