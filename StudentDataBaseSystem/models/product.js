const mongoose = require("mongoose");

const Schema = mongoose.Schema(
    {
        name:{
            type: String,
            requried: true
        },
        class:{
            type: Number,
            requried: true
        },
        subjects:{
            type: String,
            enum: ['english', 'math', 'physics', 'chemistry', 'hindi']
        }
    }
);

const Student = mongoose.model('Student', Schema);

module.exports = Student;
