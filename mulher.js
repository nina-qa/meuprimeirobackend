const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Nina' , 
        imagem: 'C:\Users\Lenovo\Desktop\Screenshot_21.png',
        minibio: 'Q.A',
      
    })

}       
function mostraPorta() {
    console.log("servidor criado e rodando na ", porta)
}

app.use(router.get('/mulher' , mostraMulher))
app.listen(porta , mostraPorta)