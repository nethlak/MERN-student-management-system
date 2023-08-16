const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv= require('dotenv');
const app = express();
dotenv.config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // useCreateIndex: true,
    // useNewUrlParser:true,
    // useUnifiedTopologyL:true,
    // useFindAndModify:false
})

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log('mongodb connection succesfully!');
})

const studentRouter = require("./routes/Students.js");// import student.js

app.use("/student",studentRouter); //(url,executable page)

app.listen(PORT, ()=>{
    console.log(`up and running on port ${PORT}`); 
})