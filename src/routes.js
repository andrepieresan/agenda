const express= require('express')
const route = express.Router(); 
const homeController = require('./controllers/homeController')
// rotas da homepage (LOGIN)

route.get('/', homeController.homepage);


route.post('/',(req,res)=>{
    res.send('<h1> nova rota de post (home) </h1>')
});

module.exports = route;

// rotas de agenda (CRUD)