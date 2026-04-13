const Task = require('../models/Task');
const { validationResult } = require('express-validator');

exports.createTask = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.array());

    const task = await Task.create({
        ...req.body,
        userId: req.user.id
    });

    res.json(task);
};

exports.getTasks = async (req, res) => {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
};

exports.getTask = async (req, res) => {
    const task = await Task.findOne({
        _id: req.params.id,
        userId: req.user.id
    });

    if (!task) return res.status(404).json({ msg: "Not found" });

    res.json(task);
};

exports.updateTask = async (req, res) => {
    const task = await Task.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.id },
        req.body,
        { new: true }
    );

    if (!task) return res.status(404).json({ msg: "Not found" });

    res.json(task);
};

exports.deleteTask = async (req, res) => {
    const task = await Task.findOneAndDelete({
        _id: req.params.id,
        userId: req.user.id
    });

    if (!task) return res.status(404).json({ msg: "Not found" });

    res.json({ msg: "Deleted" });
};

const { scheduleReminder } = require('../utils/reminder');

exports.createTask = async (req, res) => {
    const task = await Task.create({
        ...req.body,
        userId: req.user.id
    });

    scheduleReminder(task);

    res.json(task);
};