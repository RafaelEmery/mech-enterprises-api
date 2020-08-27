const mongoose = require('../database');

const MachineSchema = mongoose.Schema({
    unit: {
        type: mongoose.Types.ObjectId,
        ref: 'Unit',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    responsible: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Available', 'Disabled', 'In maintence'],
        default: 'Available',
    },
    created_at: {
        type: Date,
        default: Date.now(),
    }
});

const Machine = mongoose.model('Machine', MachineSchema);

module.exports = Machine;