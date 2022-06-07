use viloes;

-- CSU01 ADICIONAR VILÃO

INSERT INTO tb_vilao (nm_vilao, ds_maldades, bt_superpoder)
		values ("Bruno", "Sessions", true);

-- CSU02 CONSULTAR TODOS VILÕES 

SELECT 
	id_vilao id,
		nm_vilao nome,
        ds_maldades maldades,
        bt_superpoder superpoder
from tb_vilao;


-- CSU03 DELETAR VILÃO

delete from tb_vilao
	where id_vilao = 1; 
	