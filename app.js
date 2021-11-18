const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helper = require('./helper.js');
const app = express();

// limit the number of request every 1 minute
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5,
});

app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const index = (_request, response) => {
    response.status(200).send({ message: 'Server template By Iamnonso'});
}

app.get('/', index);
module.exports = app;