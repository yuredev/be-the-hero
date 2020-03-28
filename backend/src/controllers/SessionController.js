const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const ong = await connection('ongs')
        .where('id', request.body.id)
        .select('name')
        .first();
        if (!ong) {
            return response.status(400).json({ 
                error: 'No ONG found with this ID'
            });
        }
        return response.json(ong);
    }
}