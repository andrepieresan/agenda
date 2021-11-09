const express = require ('express');
const app = express();
const route = require('./routes')
app.use (express.urlencoded({extended:true}));



app.listen(3000, (req, res)=>{
    console.log ("servidor online em: localhost:300")
})