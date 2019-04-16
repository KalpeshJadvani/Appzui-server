const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const port = 8383;

const user = require('./api/user');


app.use((bodyParser.urlencoded({ extended: false })));
app.use(bodyParser.json());

var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/appzui_lcm',{ useNewUrlParser: true });
app.use('/',user);

app.use((req, res) => {
    res.send('Not Found');
});

server.listen(port, ()=>{
    console.log(`Server is runing on port  ${port}`);
});