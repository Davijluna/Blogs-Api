const express = require('express');
const userController = require('./database/controllers/userController');
// ...
const app = express();

app.use(express.json());

app.post('/login', userController);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
