const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mech-enterprises-db', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}); 
mongoose.Promise = global.Promise;  

module.exports = mongoose;