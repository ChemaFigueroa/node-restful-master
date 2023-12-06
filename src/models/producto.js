const { connectMysql } = require('../dbconnection');
class ProductosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('producto');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('producto').where('Idproducto', id);
    }

    static async agregar(producto) {
        let db = await connectMysql();

        let query = db('producto').insert(producto)
        return await query;
        
    }


    static async editar(id,producto) {
        let db = await connectMysql();
        let query = db('producto')
        .where({ Idproducto: id })
        .update(producto)
        return await query;
        
    }

    static async actualizar(Idproducto, campos) {
        let db = await connectMysql();
        return await db('producto').where('Idproducto', Idproducto).update(campos);
    }
}

module.exports = ProductosModel;