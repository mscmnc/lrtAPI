const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');

const livesRoutes = require('./routes/live');

const app = express();
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'), 
    { flags: 'a' }
);

app.use(helmet());
app.use(compression());
app.use(morgan('combined', { stream: accessLogStream }));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/live', livesRoutes);

app.listen(process.env.PORT || 8080);
