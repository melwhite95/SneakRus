const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');






app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
