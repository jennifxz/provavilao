import { useState } from "react";
import { Link } from "react-router-dom";
import { adcviloes } from "../api/vilaoapi";

 function AdcVilao () {

    const [nome, setNome] = useState('');
    const [maldades, setMaldades] = useState('');
    const [superpoder, setSuperPoder] = useState(false);

    async function salvarClick () {
        try {
            const r = await adcviloes(nome, maldades, superpoder)
            alert('Vilão cadastrado com sucesso!!!!');
        
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div>
            <Link to="/consultar">Consultar Vilões</Link>
            <h2>Adicionar Vilão</h2>
            <label>Nome:</label>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)}></input>
            <label>Maldades:</label>
            <input type="text" value={maldades} onChange={ e => setMaldades(e.target.value)}></input>
            <label>Super Poder:</label>
            <input type="checkbox" value={superpoder} onChange={ e => setSuperPoder(e.target.checked)}></input>
            <button onClick={salvarClick}>Salvar</button>

        </div>
    )
}

export default AdcVilao;