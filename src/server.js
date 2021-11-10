const express = require ('express');
const app = express();
const route = require('./routes');
const path = require('path');


app.set ('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use (express.urlencoded({extended:true}));





app.use(route);
app.listen(3000, (req, res)=>{
    console.log ("Servidor atualizado e online em 'localhost:3000'")
});