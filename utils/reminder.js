const axios = require('axios');

let timers = {};

const scheduleReminder = (task) => {
    if (!task.dueDate) return;

    const delay = new Date(task.dueDate).getTime() - Date.now() - (60 * 60 * 1000);

    if (delay <= 0) return;

    if (timers[task._id]) {
        clearTimeout(timers[task._id]);
    }

    timers[task._id] = setTimeout(async () => {
        console.log(`⏰ Reminder: Task "${task.title}" is due soon`);

        try {
            await axios.post(process.env.WEBHOOK_URL, {
                message: `Reminder for task ${task.title}`,
                taskId: task._id
            });
        } catch (err) {
            console.log("Webhook failed");
        }

    }, delay);
};

module.exports = { scheduleReminder };