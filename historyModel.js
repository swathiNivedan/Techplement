// models/historyModel.js
const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    expression: {
        type: String,
        required: true
    },
    result: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const History = mongoose.model('History', historySchema);

module.exports = History;
