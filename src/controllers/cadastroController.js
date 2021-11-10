const Cadastro = require(`../models/cadastroModel`);

exports.index = (req, res)=>
{           
    res.render('cadastro');
          
}
exports.register = function(req,res){
    const Cadastro = new Cadastro (req.body)
   console.log(Cadastro.body)
};