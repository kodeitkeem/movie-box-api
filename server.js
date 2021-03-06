const express = require('express');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();
require('./config/database');

const app = express();


// Middleware mount
app.use(express.json());
app.use(logger('dev'));
app.use(cors());

// Routes mount
app.use('/api/users', require('./routes/api/users'));

const port = process.env.PORT || 3001;

// Listen on port
app.listen(port, function(){
    console.log(`Express is listening on port ${port}`)
}) 