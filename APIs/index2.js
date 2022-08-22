// Server
const express = require('express')
const app = express()
app.listen('3000')

// ====================================================
// Rota GET
// app.route('/').get((req, res) => res.send('Hello World!')) 
// app.route('/sobre').get((req, res) => res.send('Sobre!'))

// ====================================================
// Rota POST
// Middleware

// app.use(express.json())

// app.route('/').post((req, res) => res.send(req.body))


// ====================================================
// Rota PUT
// Middleware
// app.use(express.json())

// let author = "Maycon"

// app.route('/').get((req, res) => res.send(author))

// app.route('/').put((req, res) => {
//     author = req.body
//     res.send(author)
// })

// ====================================================
// Rota DELETE

// app.route('/:indentificador').delete((req, res) => {
//     res.send(req.params.indentificador)
// })

// ====================================================
// Parâmetros nas Requisições

// app.route('/').get((req, res) => res.send(req.query.name))

// app.route('/').post((req, res) => res.send(req.body))

// app.route('/:parametro').get((req, res) => res.send(req.params.parametro))

// ====================================================
// Body Params
// Middleware
// app.use(express.json())

// app.route('/').post((req, res) => {
//     const {nome, cidade} = req.body
//     res.send(nome, cidade)
// })

// ====================================================
// Route Params

// app.route('/').get((req, res) => res.send("oi"))

// app.route('/').get((req, res) => res.send(req.params.variavel))

// app.route('/identidade/:nome').get((req, res) => res.send(req.params.nome))

// ====================================================
// Query Params

app.route('/').get((req, res) => res.send(req.query.nome))

app.route('/about/user').get((req, res) => res.send(req.query.id))
