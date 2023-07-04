const express = require("express")
const router =  express.Router()
const cors = require('cors')

const conectabancoDeDados = require('./bancodedados')
conectabancoDeDados() 

const mulher = require('./mulhermodel')

const app = express()
app.use(express.json())
app.use(cors())

const porta = 3333

//get
async function mostraMulheres(request, response) {
    try{
        const mulhereslindasdobancodedados = await mulher.find()
        response.json(mulhereslindasdobancodedados)

    } catch{erro} {
        console.log(erro)

    }

}

//post

async function criaMulher(request, response){
    const novaMulher = new mulher ({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citação: request.body.citacao
    })
    try{
        const mulhercriada = await novaMulher.save()
        response.status(201).json (mulhercriada)
    }catch(erro){
        console.log(erro)
    }

}

//patch

async function corrijiMulher(request, response){
     try{
        const mulherEncontrada = await mulher.findById(request.params.id)
        
        if(request.body.nome) {
            mulherEncontrada.nome = request.body.nome 
        }
    
        if(request.body.minibio){
            mulherEncontrada.minibio = request.body.minibio
        }
        if(request.body.nome){
            mulherEncontrada.imagem = request.body.imagem
        }
        if(request.body.citacao){
            mulherEncontrada.citacao = request.body.citacao
        }
        const mulheratualizadanobancodedados = await mulherEncontrada.save()
        response.json(mulheratualizadanobancodedados)      

     } catch(erro) {
        console.log(erro)
     }  
    
    response.json(mulheres)
}

//detele
async function deletaMulher(request, response){
    try{
        await mulher.findByIdAndDelete(request.params.id)
        response.json({mensagem: 'mulher deletada com sucesso'})
    } catch(erro){
        console.log(erro)
    }
}

function mostraPorta() {
    console.log("servidor criado e rodando na ", porta)
}

app.use(router.get ('/mulheres' , mostraMulheres))
app.use(router.post('/mulheres' , criaMulher))
app.use(router.patch('/mulheres/:id', corrijiMulher))
app.use(router.delete('/mulheres/:id' , deletaMulher))



//porta
app.listen(porta , mostraPorta)
