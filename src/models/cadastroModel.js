const mongoose = require('mongoose')
const validator = require('validator')
const CadastroSchema = new mongoose.Schema({
    email: { type: String, required: true},
    senha: { type: String, required: true}
    
});

const CadastroMOdel = mongoose.model('Cadastro', CadastroSchema);

class Cadastro {
        constructor(body){
            this.body = body;
            this.errors = [];
            this.user = null;
       }

       
    async register(){
        this.valida();
        if (this.errors.lenght > 0) return;

        try {
            this.user = await CadastroModel.create(this.body);
        } catch(e) {
             console.log(e)};
        
    }

    valida(){
        this.cleanUp();
        //validacao
        // email verificado
        if(!validator.isEmail(this.body.email)) this.errors.push('Email invalido')

        // senha verificada 3 a 60 caract
        
    }
    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        } 
    
    this.body = {
        email: this.body.email,
        password: this.body.password
    };
}
}

module.exports = Cadastro;