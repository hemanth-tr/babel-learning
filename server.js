const express = require('express');
const app = express();

app.use(express.static('build'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, 'localhost', () => {
    console.log("listening now at port 3000");
});