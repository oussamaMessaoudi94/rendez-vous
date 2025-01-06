const mongoose = require('mongoose')


const schemaArchive = mongoose.Schema({
    nameP : String,
    email : String,
    number : String,
    date : String,
    time : String,
    notes: String
})

const archives = mongoose.model('archives', schemaArchive)

module.exports = archives