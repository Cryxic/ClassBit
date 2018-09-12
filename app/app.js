const express = require('express');
const http = require ('http');

const app = express();
const PORT = 3000;

require ('../config/router') (app);
require('../db');

app.set('port', PORT);
app.set('view engine', 'jade');
app.set('view cache', false);


const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})

module.exports = app;

