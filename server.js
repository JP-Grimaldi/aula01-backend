const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Página inicial com Express');
});

app.get('/sobre', (req, res) => {
    res.send('Página de sobre com Express');
});

app.get('/contato', (req, res) => {
    res.send('Página de contato com Express');
});

app.get('/produtos', (req, res) => {
    res.send('Lista de produtos');
});

app.get('/servicos', (req, res) => {
    res.send('Lista de servicos');
});


app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
})