const mongoose =require('mongoose')

const dataSch =new mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Password:{type:String},
    Types:{type:String}
})

const mode =mongoose.model("HotelBooking",dataSch)

module.exports=mode