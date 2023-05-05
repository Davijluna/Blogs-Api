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
 // requisito 3
 app.post('/login', loginController);
 // requisito 4
 app.post('/user', 
 validCaracter,
 validEmail,
 lengthPassword,
 controllerCreate);
 // requisito 5
 app.get('/user', chekToken, controllerGetAll);
 // requisito 6
 app.get('/user/:id', chekToken, controllerGetId);
 // requisito 8
 app.post('/categories', chekToken, validName, addNameTable);
// requisito 9
 app.get('/categories', chekToken, controllerGetCategories);
// requidito 13
 app.get('/post', chekToken, getAllCategory);//
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
