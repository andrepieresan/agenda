const mongoose = require('mongoose')
const validator = require('validator')
const CadastroSchema = new mongoose.Schema({
    nome: {type: String, required:true},
    telefone: {type: String, required:true},
    username: {type: String, required:true},
    endereco: {type: String, required:true},
    email: { type: String, required: true},
    pais: { type: String, required: true},
    estado: { type: String, required: true},
    cep: { type: String, required: true},
    password: { type: String, required: true},
    
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
        password: this.body.password,
        nome: this.body.nome,
        telefone: this.body.telefone,
        username: this.body.username,
        endereco: this.body.endereco,
        pais: this.body.pais,
        estado: this.body.estado,
        cep: this.body.cep
    };
}
}

module.exports = Cadastro;