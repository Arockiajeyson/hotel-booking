const mongoose = require('mongoose')

const datSch = new mongoose.Schema({
    image: { type: String },
    price: { type: String },
    location: { type: String },
    country: { type: String },
    pincode: { type: String },
    state: { type: String },
    city: { type: String },
    name: { type: String },
    idx: { type: mongoose.Types.ObjectId, ref: 'HotelBooking' }
})

const modes = mongoose.model("HotelBookingImage", datSch)

module.exports = modes