const pool = require('../config/pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.array());

    const { email, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    try {
        const result = await pool.query(
            'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
            [email, hashed]
        );

        res.json(result.rows[0]);
    } catch (err) {
        res.status(400).json({ msg: "User exists" });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const result = await pool.query(
        'SELECT * FROM users WHERE email=$1',
        [email]
    );

    if (result.rows.length === 0)
        return res.status(400).json({ msg: "Invalid credentials" });

    const user = result.rows[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    res.json({ token });
};

exports.profile = async (req, res) => {
    const result = await pool.query(
        'SELECT id, email FROM users WHERE id=$1',
        [req.user.id]
    );

    res.json(result.rows[0]);
};
