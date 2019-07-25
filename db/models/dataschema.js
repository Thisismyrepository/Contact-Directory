
const mongoose = require('../connection');
var contactSchema = mongoose.Schema({
    name: {type:String, require:true},
    contact: {type:String, require:true}
});

module.exports = mongoose.model('contacts', contactSchema);