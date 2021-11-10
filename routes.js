const express= require('express')
const route = express.Router(); 
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const cadastroController = require('./src/controllers/cadastroController')



// rotas da homepage (LOGIN)

route.get('/', homeController.homepage);
route.post('/', homeController.login)

// rotas de cadastro
route.get('/cadastro', cadastroController.index ); 
route.post('/cadastro', cadastroController.register ); 


// rotas de agenda (CRUD)




module.exports = route;