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
        subject:{
            type: String,
            enum: ['math', 'bilogy', 'commerce']
        }
    }
);

const Student = mongoose.model('Student', Schema);

module.exports = Student;
