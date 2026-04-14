const { body } = require('express-validator');

exports.taskValidator = [
    body('title').notEmpty(),
    body('status').optional().isIn(['pending', 'completed'])
];
