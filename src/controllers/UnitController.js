const Unit = require('../models/Unit');
const Company = require('../models/Company');

module.exports = {

    async index(req, res) {
        try {
            const units = await Unit.find().populate('company', 'name');

            return res.json(units);
        } catch (error) {
            return res.status(400).send(error.message);
        }
    },

    async store(req, res) {
        
        try {
            const { company, name } = req.body;
            
            const unit = await Unit.create({ company, name });
            const companyObject = await Company.findOne({ _id: company });
        
            companyObject.units.push(unit);
            companyObject.save();

            return res.send({ message: 'Unit created' });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { company, name } = req.body;
            
            await Unit.update({ _id: id  }, { company, name });
            
            return res.send({ message: 'Unit updated' });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;

            await Unit.deleteOne({ _id: id });

            return res.send({ message: 'Unit deleted' });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    },
}