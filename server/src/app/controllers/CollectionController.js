const connection = require('../../database/connection');

class CollectionController {
  async index(req, res) {
    const { limit } = req.query;

    const collections = await connection('collections')
      .select(['id', 'name', 'image_url'])
      .limit(limit);
    
    res.set('Access-Control-Allow-Origin', '*')

    return res.json(collections);
  }

  async store(req, res) {
    const { name, image } = req.body;

    await connection('collections').insert({
      name,
      image_url: `${process.env.API_URL}/uploads/${image}`
    });

    return res.status(204).json();
  }
}

module.exports = new CollectionController();
