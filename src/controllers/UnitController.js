const Unit = require('../models/Unit');

module.exports = {

    async index(req, res) {
        try {
            const units = await Unit.find().populate('company', 'name');

            return res.json(units);
        } catch (error) {
            return res.status(400).send({ message: 'Error' }); 
        }
    },

    async store(req, res) {
        try {
            const { company, name } = req.body;

            const unit = await Unit.create({ company, name });

            return res.json(unit);
        } catch (error) {
            return res.status(400).send({ message: 'Error' });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const { company, name } = req.body;
            
            await Unit.update({ _id: id  }, { company, name });
            
            return res.send({ message: 'Updated' });
        } catch (error) {
            return res.status(400).send({ message: 'Error' });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;

            await Unit.deleteOne({ _id: id });

            return res.send({ message: 'Deleted' });
        } catch (error) {
            return res.status(400).send({ message: 'Error' });
        }
    },
}