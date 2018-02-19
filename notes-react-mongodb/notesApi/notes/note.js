const mongoose = require('mongoose');



// Note Schema
const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    }
    ,body: {
        type: String,
        required: true
    }
    ,user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
    ,createdAt: {
        type: Date,
        default: Date.now()
    }
})

// Creating note model
const note = mongoose.model('notes', noteSchema);

module.exports = exports = note;