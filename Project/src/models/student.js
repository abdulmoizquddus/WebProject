const mongoose = require("mongoose") //require our mongose module (used for ease with mongoDB)

const studentSchema = new mongoose.Schema({
    studentName : {
        type: String,
        required: true
    },
    studentPassword : {
        type: String,
        required: true
    }
})



// creating collectins

const student = new mongoose.model("student", studentSchema) // creates student collection in the database

module.exports = student // exporting our student collection to use in other modules
