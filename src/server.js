const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes'); // importa arquivo routes.js

const app = express();


mongoose.connect('mongodb+srv://root:rootroot@zevolpato-dk8di.mongodb.net/aula?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes); // deve vim depois do express.json ( ele lê os arquivos sequencialmente)

app.listen(3333); 









//app.get('/' , (req, res) => {
//    return res.send('Olá Mundo!!!');
//});
// quantidade carrinho usuário
// resposta para a requesição


// APRENDENDO
// banco com sql procurar no blog post com SEQUELIZE
// GET, POST, PUT, DELETE
// get -- req.query = acessar query params (para filtros)
// put --  req.params = acessar route params (para edição e delete)
// post -- req.body = acessar corpo da requisição (para criação e edição), mas precisa adicionar
// app.use(express.json())

//app.use(express.json());

//app.post('/users' , (req, res) => {
//    return res.json(req.body);
//});

//app.put('/users/:id' , (req, res) => {
//    return res.json({ id : req.params.id });
//});

//app.get('/users' , (req, res) => {
//    return res.json({ idade : req.query.idade });
//});

//app.get('/users' , (req, res) => {
//    return res.json({ message : "Hellow Word!!!" });
//});

//app.listen(3333);

