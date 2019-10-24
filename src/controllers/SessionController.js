// index, show, store, update, destroy
// index    = retorna uma listagem de controles, lista.
// show     = retorna uma única sessão.
// store    = quando eu quero criar uma sessão.
// update   =  quando eu quero alterar uma sessão.
// destry   = quando eu quero excluir uma sessão.
const User = require("../models/User");

module.exports ={
    async store(req, res){
       // const email = req.body.email;
       // utilizando um recurso do JavaScript chamado desestruturação o código acima fica assim:
       const { email } = req.body; 

       let user = await User.findOne({ email });

       if (!user){
            user = await User.create({ email });

       }
       //const user = await User.create({ email }); // await = aguarda uma função a ser utilizada de forma assincrona    }

       return res.json(user);
    }};