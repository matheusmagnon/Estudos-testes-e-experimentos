const express = require('express')
const app = express()
const porta = 3580

app.get('/produtos', (req, res, next) => {
    res.send({
            nome: 'Notebook',
            preco: 123.45
        }) //Converte para JSON
})

app.listen(porta, () => {
    console.log(`Servidor ONLINE na porta ${porta}`)
})