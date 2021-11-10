const express= require('express')
const route = express.Router(); 
const homeController = require('./controllers/homeController')
const loginController = require('./controllers/loginController')
const cadastroController = require('./controllers/cadastroController')



// rotas da homepage (LOGIN)

route.get('/', homeController.homepage);

// rotas de cadastro
route.get('', cadastroController.index ); 



// rotas de agenda (CRUD)




module.exports = route;