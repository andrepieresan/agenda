
const Cadastro = require(`../models/cadastroModel`);


exports.index = (req, res)=>
{           
    res.render('cadastro');
          
}
exports.register = async function(req,res){
  
    const cadastro = new Cadastro (req.body);
    await cadastro.register();
    
  
    return res.send(cadastro.body);
 
};