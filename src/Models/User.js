const mongoose = require ('mongoose')

const User = new mongoose.Schema({
    name: {type: String, required: true},
    profession: {type: String}
})

module.exports = mongoose.model('User', User)