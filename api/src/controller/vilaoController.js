import { Router } from "express";
import { consultarViloes, deletarViloes, inserirVilao } from "../repository/vilaoRepository.js";

const server = Router();

server.post('/vilao', async (req, resp) => {
    try {
        const novoVilao = req.body;
        if(!novoVilao.nome) {
            throw new Error ('Nome do vilão é obrigatório.');
        }
        if(!novoVilao.maldades) {
            throw new Error ('Maldades do vilão é obrigatório.');
        }
        if(!novoVilao.superpoder) {
            throw new Error ('Super Poder do vilão é obrigatório');
        }
        
        const vilaoInserido = await inserirVilao(novoVilao);

        resp.send(vilaoInserido);
    } catch (err) {
        resp.status(400).send ({
            erro:err.message
        });
    }
}) 


server.get('/vilao', async (req, resp) => {
    try {
        const resposta = await consultarViloes();
        resp.send(resposta)

    } catch (err) {
        resp.status(404).send({
            erro:err.message
        });
        
    }
})


server.delete('/deletarViloes/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const resposta = await deletarViloes(id)
        if( !resposta) {
            throw new Error ('Não foi possível deletar este vilão. PODER DELE É MAIS DE 8000!')
        }
        resp.status(204).send()
    } catch (err) {
        resp.status(401).send ({
            erro: err.message
        });
    }
}) 

export default server;