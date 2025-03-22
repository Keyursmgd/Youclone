const express = require("express");
const app = express();

const db = require('./models/index')
const cookieParser = require("cookie-parser");
const cors = require('cors')

app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.json())
const AuthRoutes = require("./Routes/user");
const vidRoutes = require("./Routes/video");
const commRoutes = require("./Routes/comment")


app.use('/auth', AuthRoutes);
app.use('/api', vidRoutes);
app.use('/com', commRoutes);

db.sequelize.sync().then(() => {
    app.listen(4000, () => {
        console.log("Our project backend has been started");
    });
});

