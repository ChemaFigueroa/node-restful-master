const { connectMysql } = require('../dbconnection');
class PersonaModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('persona');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('persona').where('idpersona', id);
    }

    static async agregar(persona) {
        let db = await connectMysql();
        let query = db('persona').insert(persona)
        return await query;
        
    }

    static async editar(id,persona) {
        let db = await connectMysql();
        let query = db('persona')
        .where({ Idpersona: id })
        .update(persona)
        return await query;
        
    }

    static async actualizar(Idpersona, campos) {
        let db = await connectMysql();
        return await db('persona').where('Idpersona', Idpersona).update(campos);
    }

   


    
    
    
}

module.exports = PersonaModel;