const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const ongs = await connection ('ongs').select('*');

        return response.json(ongs);        
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf} = request.body;

        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    },

    async delete(request, response) {
        // const ongs = await connection ('ongs').select('*');
        const { id } = request.params;
        // const ong_id = request.headers.authorization;

        const ong = await connection ('ongs')
            .where('id', id)
            .select('id')
            .first();
            
        if (ong == null ) {
            return response.status(401).json({error: 'Operation not permitted! This ID do not exist.'});
        }

        if (ong.id != id) {
            return response.status(401).json({error: 'Operation not permitted!'});
        }
        
        await connection('ongs').where('id', id).delete();

        return response.status(204).send();
    }
};