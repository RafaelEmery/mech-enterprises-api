const mongoose = require('../database');

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;