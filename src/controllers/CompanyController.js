const Company = require('../models/Company');

module.exports = {

    async index(req, res) {
        try {
            const companies = await Company.find();

            return res.json(companies);
        } catch (error) {
            return res.status(400).send({ message: 'Error' });
        }
    },

    async show(req, res) {
        try {
            const { id } = req.params;
    
            const company = await Company
                                    .findOne({ _id: id })
                                    .populate({
                                        path: 'units',
                                        populate: { path: 'machines' }
                                    });
                                    
            return res.json(company);
            } catch (error) {
                return res.status(400).send(error.message);
            }
    },

    async store(req, res) {
        try {
            const { name } = req.body;
            const company = await Company.create({ name });

            return res.json(company);
        } catch (error) {
            return res.status(400).send({ message: 'Error' });
        }
    },
    
    async update(req, res) {    
        try {
            const { id } = req.params;
            const { name } = req.body;
            
            await Company.update({ _id: id  }, { name });
            
            return res.send({ message: 'Updated' });
        } catch (error) {
            return res.status(400).send({ message: 'Error' });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;

            await Company.deleteOne({ _id: id });

            return res.send({ message: 'Deleted' });
        } catch (error) {
            return res.status(400).send({ message: 'Error' });
        }
    }
}
