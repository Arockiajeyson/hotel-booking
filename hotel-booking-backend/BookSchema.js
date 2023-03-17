const mongoose = require('mongoose')

const datSch = new mongoose.Schema({
    idOfBook:{type:mongoose.Types.ObjectId}
})

const modes = mongoose.model("BookingSc", datSch)

module.exports = modes