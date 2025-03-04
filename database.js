const {createPool} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "Keyur@12357",
    database:"youback"
});

pool.query(`select * from youback.ds`,(err,res)=>{
    return console.log(res)
})

