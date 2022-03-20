const promise = require("bluebird");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });



const initOptions = {
    promiseLib: promise // overriding the default (ES6 Promise);
};

const pgp = require('pg-promise')(initOptions);
// See also: http://vitaly-t.github.io/pg-promise/module-pg-promise.html

// Database connection details;
const cn = {
    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'lifeplus_db',
    user: 'lifeplus',
    password: 'root',

    // to auto-exit on idle, without having to shut-down the pool;
    // see https://github.com/vitaly-t/pg-promise#library-de-initialization
    allowExitOnIdle: true
};
// You can check for all default values in:
// https://github.com/brianc/node-postgres/blob/master/packages/pg/lib/defaults.js

const db = pgp(cn); // database instance;

var allStudents = undefined;
var appointments=undefined;


db.many("select * from patient_details inner join appointment on Appointment.patient_id = patient_details.id where doctor_id =4;")
.then((data) => { 
   this.appointments =data;
}).catch((error) => {
    console.log("Error : " + error);
});

db.many("Select * from contact_us;")
.then((data) => { 
   this.allStudents =data;
}).catch((error) => {
    console.log("Error : " + error);
});



const express = require("express");
const server = express();
const port = 3000;
const cors = require("cors");


server.use(cors());

server.get("/student",(req, res) => {
    res.send(this.allStudents);
});

server.get("/appointments",(req, res) => {
    res.send(this.appointments);
});



server.post('/user',urlencodedParser,(req, res) => {

    db.query("insert into contact_us(firstname, lastname,email_id, p_comment) values('arman','sakware','email','arm')",(err,res)=>{
        console.log(err,res);
        db.end();
    })
      
    })


server.listen(port,()=> {
        console.log("Server started");
});


