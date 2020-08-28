const Machine = require('../models/Machine');
const Unit = require('../models/Unit');

module.exports = {

    async index(req, res) {
        try {
           const machines = await Machine.find().populate('unit', 'name');
           
           return res.json(machines);
        } catch (error) {
            return res.status(400).send({ message: 'Error' });
        }
    },

    async store(req, res) {
        try {
            const { unit, name, image, model, responsible, status } = req.body;

            const machine = await Machine.create({ unit, name, image, model, responsible, status });
            const unitObject = await Unit.findOne({ _id: unit });

            unitObject.machines.push(machine);
            unitObject.save();

            return res.send({ message: 'Created' });
        } catch (error) {
            return res.status(400).send({ message: 'Error' }); 
        }
    },

    //Not working yet
    async update(req, res) {
        try {
            const { id } = req.params;
            const { unit, name, image, model, responsible, status } = req.body;

            await Machine.update({_id: id}, { unit, name, image, model, responsible, status });

            return res.send({ message: 'Created' });
        } catch (error) {
            return res.status(400).send({ message: 'Error' }); 
        } 
    },

    async delete(req, res) {
        try {
            const { id } = req.params;

            await Machine.deleteOne({ _id: id });

            return res.send({ message: 'Deleted' });
        } catch (error) {
            return res.status(400).send({ message: 'Error' });
        }
    },
}