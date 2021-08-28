const mongoose = require('mongoose');
const BookingScehma =new mongoose.Schema({
    studentName:{
        type:String
    },
    course:[{
        courseName:{type:String},
        startTime:{type:Number},
        endTime:{type:Number}
    }]
});

module.exports = Booking = mongoose.model('Booking',BookingScehma);