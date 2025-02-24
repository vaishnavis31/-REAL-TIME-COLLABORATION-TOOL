const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    content: { type: String, required: true, default: '' },
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Document', documentSchema);
