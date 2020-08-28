const mongoose = require('../database');

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
    units: [{
        type: mongoose.Types.ObjectId,
        ref: 'Unit',
    }],
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;