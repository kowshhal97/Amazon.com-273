const express=require('express');
const app=express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());


module.exports=app;