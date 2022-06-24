import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5000'
})

export async function adcviloes(nome, maldades, superpoder) {
    const resposta = await api.post('/vilao', {
        nome:nome,
        maldades:maldades,
        superpoder:superpoder
    })
    return resposta.data
}

export async function consultarViloes () {
    const r = await api.get('/vilao') 
    return r.data
}
