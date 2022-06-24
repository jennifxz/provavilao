
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { consultarViloes }  from "../api/vilaoapi";
 function CstVilao () {

    const [viloes, setViloes] = useState([]); 

    async function carregartodos () {
        const resp = await consultarViloes();
        setViloes(resp);
    }

    useEffect(() => {
        carregartodos();
    }, [])
   
    return (
        <div>
            <h2>Consultar Vilões</h2>
            <Link to='/'>Adicionar Vilão</Link>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Maldades</th>
                        <th>Tem poder</th>
                    </tr>
                </thead>
                <tbody>
                  {viloes.map(item =>
                    <tr>
                        <td>
                            {item.nome}
                        
                        </td>
                        <td>
                            {item.maldades}
                        </td>
                        <td>
                            {item.superpoder ? 'Sim' : 'Não'}
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default CstVilao;