const express = require('express');
const { loginController, controllerCreate } = require('./database/controllers/userController');
// ...
const app = express();

const {
     validEmail,
     validCaracter,
     lengthPassword,
 } = require('./middlewares/functionValidatin');

app.use(express.json());

app.post('/login', loginController);

app.post('/user', 
    validCaracter,
    validEmail,
    lengthPassword,
    controllerCreate);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
