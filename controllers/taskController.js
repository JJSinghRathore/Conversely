const Task = require('../models/Task');
const axios = require('axios');
const { scheduleReminder } = require('../utils/reminder');

// CREATE TASK
exports.createTask = async (req, res) => {
    const task = await Task.create({
        ...req.body,
        userId: req.user.id
    });

    scheduleReminder(task);

    res.json(task);
};

// GET ALL TASKS
exports.getTasks = async (req, res) => {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
};

// GET SINGLE TASK
exports.getTaskById = async (req, res) => {
    const task = await Task.findOne({
        _id: req.params.id,
        userId: req.user.id
    });

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(task);
};

// WEBHOOK FUNCTION (with retry)
const sendWebhook = async (task, retries = 3) => {
    try {
        await axios.post(process.env.WEBHOOK_URL, {
            id: task._id,
            title: task.title,
            userId: task.userId,
            completedAt: new Date()
        });
    } catch (err) {
        if (retries > 0) {
            setTimeout(() => sendWebhook(task, retries - 1), 2000);
        }
    }
};

// UPDATE TASK
exports.updateTask = async (req, res) => {
    const task = await Task.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.id },
        req.body,
        { new: true }
    );

    if (!task) return res.status(404).json({ message: "Task not found" });

    scheduleReminder(task);

    if (req.body.status === 'completed') {
        sendWebhook(task);
    }

    res.json(task);
};

// DELETE TASK
exports.deleteTask = async (req, res) => {
    const task = await Task.findOneAndDelete({
        _id: req.params.id,
        userId: req.user.id
    });

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task deleted" });
};

// FILTER TASKS
exports.filterTasks = async (req, res) => {
    const { category, tag } = req.query;

    let filter = { userId: req.user.id };

    if (category) filter.category = category;
    if (tag) filter.tags = tag;

    const tasks = await Task.find(filter);

    res.json(tasks);
};
