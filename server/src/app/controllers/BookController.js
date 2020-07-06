const connection = require('../../database/connection');

class BookController {
  async index(req, res) {
    const { category, limit, order } = req.query;

    const books = await connection('books')
      .select('*')
      .where('category', category)
      .orderBy('created_at', order)
      .limit(limit);
    
    res.set('Access-Control-Allow-Origin', '*')
    
    return res.json(books);
  }

  async store(req, res) {
    const { category, image_url } = req.body;

    await connection('books').insert({
      category,
      image_url
    });

    return res.status(204).json();
  }
}

module.exports = new BookController();
