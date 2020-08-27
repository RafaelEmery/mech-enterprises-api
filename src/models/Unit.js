const mongoose = require('../database');

const UnitSchema = new mongoose.Schema({
    company: {
        type: mongoose.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
    // machines: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Machine',
    // },
});

const Unit = mongoose.model('Unit', UnitSchema);

module.exports = Unit;