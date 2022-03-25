const promise = require("bluebird");
const bodyParser = require('body-parser');

const initOptions = {
    promiseLib: promise 
};

const pgp = require('pg-promise')(initOptions);

// Database connection details;
const cn = {
    host: 'localhost', // 'localhost' is the default;
    port: 5432, // 5432 is the default;
    database: 'lifeplus_db',
    user: 'lifeplus',
    password: 'root',

    // to auto-exit on idle, without having to shut-down the pool;
   
    allowExitOnIdle: true
};


const db = pgp(cn); // database instance;

var appointments=undefined;
var contact =undefined;


db.many("select * from patient_details inner join appointment on Appointment.patient_id = patient_details.id where doctor_id =2;")
.then((data) => { 
   this.appointments =data;
}).catch((error) => {
    console.log("Error : " + error);
});



const express = require("express");
const server = express();
const cors = require("cors");

server.use(cors());
server.use(bodyParser.json());

var urlencodedParser = bodyParser.urlencoded({ extended: false })  

server.use(express.static('public'));  

server.post('/contact',urlencodedParser,function (req, res) {  
   firstname=(req.body.firstname);
   lastname=(req.body.lastname);
   email=(req.body.email);
   comment=(req.body.comment);
   db.none("insert into contact_us(firstname,lastname, email_id, p_comment) values($1,$2,$3,$4)",[firstname,lastname,email,comment],(err,res)=>{
    console.log(err,res);
})
   res.end(JSON.stringify(response));  
   
   
});
var ser = server.listen(3000, function () {  
  var host = ser.address().address  
  var port = ser.address().port  
  console.log("lifePlus listening at http://%s:%s", host, port)  
})  


server.get("/appointments",(req, res) => {
    res.send(this.appointments);
});






