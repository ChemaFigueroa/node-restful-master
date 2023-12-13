const { connectMysql } = require('../dbconnection');
class CategoriasModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('categoria');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('categoria').where('Idcategoria', id);
    }
    static async agregar(categoria) {
        let db = await connectMysql();

        let query = db('categoria').insert(categoria)
        return await query;
        
    }

    static async editar(id,categoria) {
        let db = await connectMysql();
        let query = db('categoria')
        .where({ Idcategoria: id })
        .update(categoria)
        return await query;
        
    }

    static async actualizar(Idcategoria, campos) {
        let db = await connectMysql();
        return await db('categoria').where('Idcategoria', Idcategoria).update(campos);
    }

  

    
}

module.exports = CategoriasModel;

