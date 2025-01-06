const mongoose = require('mongoose')


const appointment = mongoose.Schema({
    nameP : String,
    email : String,
    number : Number,
    date : String,
    time : String,
    valide : String
})

const appointments = mongoose.model('appointments', appointment)

module.exports = appointments