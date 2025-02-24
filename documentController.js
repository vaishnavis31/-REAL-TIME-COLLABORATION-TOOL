const Document = require('../models/documentModel');

const createDocument = async (req, res) => {
    try {
        const newDocument = new Document();
        await newDocument.save();
        res.status(201).json({ id: newDocument._id });
    } catch (error) {
        res.status(500).json({ message: 'Error creating document' });
    }
};

const getDocument = async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);
        if (!document) return res.status(404).json({ message: 'Document not found' });
        res.json(document);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching document' });
    }
};

const updateDocument = async (req, res) => {
    try {
        await Document.findByIdAndUpdate(req.params.id, { content: req.body.content, lastUpdated: Date.now() });
        res.json({ message: 'Document updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating document' });
    }
};

module.exports = { createDocument, getDocument, updateDocument };
