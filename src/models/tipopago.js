const { connectMysql } = require('../dbconnection');
class TiposPagoModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('tipopago');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('tipopago').where('idtipopago', id);
    }

    static async agregar(tipopago) {
        let db = await connectMysql();

        let query = db('tipopago').insert(tipopago)
        return await query;
        
    }

    static async editar(id,tipopago) {
        let db = await connectMysql();
        let query = db('tipopago')
        .where({ Idtipopago: id })
        .update(tipopago)
        return await query;
        
    }

    static async actualizar(Idtipopago, campos) {
        let db = await connectMysql();
        return await db('tipopago').where('Idtipopago', Idtipopago).update(campos);
    }
}

module.exports = TiposPagoModel;