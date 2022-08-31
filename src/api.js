const express = require('express');
const {
     loginController,
     controllerCreate,
    controllerGetAll,
    controllerGetId,
    addNameTable,
    controllerGetCategories,
    getAllCategory,
     } = require('./database/controllers/userController');
// ...
const app = express();

const {
     validEmail,
     validCaracter,
     lengthPassword,
     validName,
     // blogvalidetion,
 } = require('./middlewares/functionValidatin');

 const chekToken = require('./middlewares/validToken');

 app.use(express.json());
 
 app.post('/login', loginController);
 
 app.post('/user', 
 validCaracter,
 validEmail,
 lengthPassword,
 controllerCreate);
 
 app.get('/user', chekToken, controllerGetAll);

 app.get('/user/:id', chekToken, controllerGetId);

 app.post('/categories', chekToken, validName, addNameTable);

 app.get('/categories', chekToken, controllerGetCategories);

 app.get('/post', chekToken, getAllCategory);//
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
