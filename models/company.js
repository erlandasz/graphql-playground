const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
    title: {
    type: String,
    required: true
    },
    description: {
    type: String,
    required: true
    },
});


module.exports = mongoose.model('Company', companySchema);