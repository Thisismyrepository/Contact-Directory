const mongoose = require('mongoose');
const config = require('../utils/config');
mongoose.connect(config.dbURL);
console.log('db connected');
module.exports = mongoose;