
const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraOla(request , response) {
    response.send("olá")    
}

function mostraPorta() {
    console.log("servidor criado e rodando na ", porta)
}
app.use(router.get('/ola' , mostraOla))
app.listen(porta , mostraPorta)