const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({

    name : {
        type: String,
        required : true// backend validation
    },
    age:{
        type : Number,
        required:true
    },
    gender:{
        type : String,
        required:true
    }

})

const Student = mongoose.model("Student",studentSchema);//(table name,schema name)

module.exports = Student;// without this, we cant use student module in routes