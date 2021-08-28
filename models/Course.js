const mongoose = require('mongoose');
const CourseScehma =new mongoose.Schema({
    courseName:{
        type:String
    },
    startTime:{
        type:String
    },
    endTime:{
        type:String
    },
    total:{
        type:Number
    },
    available:{
        type:Number
    }
});

module.exports = Course = mongoose.model('Course',CourseScehma);