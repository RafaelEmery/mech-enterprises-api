const mongoose = require('mongoose');

//Connecting with MongoDB Atlas
mongoose.connect('mongodb+srv://rafael:rafael@mech-enterprises-db.lvutw.mongodb.net/mech-enterprises-db?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}); 
mongoose.Promise = global.Promise;  

module.exports = mongoose;