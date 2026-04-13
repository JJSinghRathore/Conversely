const express = require('express');
const app = express();

app.use(express.json());

// TEST ROUTE (IMPORTANT)
app.get('/', (req, res) => {
    res.send("API Running 🚀");
});

module.exports = app;