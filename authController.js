const { registerUser, loginUser } = require('../services/authService');

const register = async (req, res) => {
    try {
        const token = await registerUser(req.body.email, req.body.password);
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const token = await loginUser(req.body.email, req.body.password);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { register, login };
