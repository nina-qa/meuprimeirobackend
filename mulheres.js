const express = require("express")
const router =  express.Router()

const app = express()
const porta = 3333

const Mulheres = [
    {
        nome: 'nina',
        minibio: 'q.a',
    },
    {
        nome: 'conie',
        minibio: 'q.a',
    },
    {
        nome: 'Thay',
        minibio: 'Tech Lider',
    },
]

function mostraMulheres(request, response) {
    response.json(Mulheres)
}

function mostraPorta() {
    console.log("servidor criado e rodando na ", porta)
}

app.use(router.get ('/mulheres' , mostraMulheres))
app.listen(porta , mostraPorta)