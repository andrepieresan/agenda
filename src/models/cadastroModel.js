const mongoose = require('mongoose')

const CadastroSchema = new mongoose.Schema({
    titulo: { type: String, require: true},
    descricao: String
});

const CadastroMOdel = mongoose.model('Cadastro', CadastroSchema);

class Cadastro {
        constructor(body){
            this.body = body;
        }
}

module.exports = Cadastro;