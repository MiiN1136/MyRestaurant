const express = require("express");
const mysql = require("mysql");
const port = process.env.PORT || 3000;
const app = new express();

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'myrestaurant',
    password : '',
});

connection.connect();

const cors = require('cors');
app.use(
    cors({origin:'*'})
);

app.get('/',(request,result)=>{
    connection.query('SELECT * FROM menu AS menu',(err,res)=>{
        if (err) throw err;

        result.write(JSON.stringify(res));
        result.end();

    });
});

app.listen(port,() =>{
    console.log(`Application server is waiting in port ${port}!`);
});