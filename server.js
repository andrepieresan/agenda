require('dotenv').config();
const express = require ('express');
const app = express();
const route = require('./routes');
const path = require('path');



app.set ('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use (express.urlencoded({extended:true}));
app.use(route);




            // CONEXAO COM DB

        const mongoose = require('mongoose');
        mongoose.connect(process.env.CONNECTIONSTRING,
        { useNewUrlParser: true, useUnifiedTopology:true})
                    .then(()=> {console.log("Db está conectada corretamente")
                                        app.emit("pronto")
                                    })
                    
                    .catch(e=> console.log(e))


             // INICIALIZADOR DO SERVIDOR

        app.on("pronto",
        ()=>{
            app.listen(3000, (req,res)=>{
            console.log("Servidor ONLINE e ATUALIZADO em http://localhost:3000/")
                                          })
        })    




