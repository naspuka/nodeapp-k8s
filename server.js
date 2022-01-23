var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('{ "response": "Hello from nas" }')
});

app.get('/will', (req, res) => {
    res.send('{ "response": "Hello world" }')
});

app.get('/ready', (req, res) => {
    res.send('{ "response": "Great to run k8s" }')
});

app.listen(process.env.PORT || 8083, () => {
    console.log("app running on port 8083");
});

module.exports = app;