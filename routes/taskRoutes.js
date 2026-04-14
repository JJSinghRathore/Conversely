const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

const {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask,
    filterTasks
} = require('../controllers/taskController');

router.post('/', auth, createTask);
router.get('/', auth, getTasks);
router.get('/filter', auth, filterTasks);
router.get('/:id', auth, getTaskById);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

module.exports = router;
