import { con } from "./connection.js";

export async function inserirVilao (vilao)
{
    const comando = `
    INSERT INTO tb_vilao (nm_vilao, ds_maldades, bt_superpoder)
    values (?, ?, ?)
`
    const [resposta] = await con.query(comando, [vilao.nome, vilao.maldades, vilao.superpoder]);
    vilao.id = resposta.insertId;

    return vilao;
}


export async function consultarViloes() {
    const comando = `
    SELECT 
	    id_vilao id,
		nm_vilao nome,
        ds_maldades maldades,
        bt_superpoder superpoder
    from tb_vilao`

    const [linhas] = await con.query(comando);
    return linhas; 
    
}