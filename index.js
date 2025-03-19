const express = require("express");
const app = express();

const db = require('./models/index')
const cookieParser = require("cookie-parser");

app.use(cookieParser());


app.use(express.json())
const AuthRoutes = require("./Routes/user");
const vidRoutes = require("./Routes/video");


app.use('/auth', AuthRoutes);
app.use('/api', vidRoutes);

db.sequelize.sync({ alter: true }).then(() => {
    app.listen(4000, () => {
        console.log("Our project backend has been started");
    });
});

