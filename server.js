var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/hello', (req,res) => {
    res.send("say hello");
});
app.get('*', (req ,res) => {
        res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
})

module.exports = app;