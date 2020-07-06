const express = require('express');
const path = require('path');

const BookController = require('./app/controllers/BookController');
const CollectionController = require('./app/controllers/CollectionController');

const routes = express.Router();

routes.get('/books', BookController.index);
routes.post('/books', BookController.store);

routes.get('/collections', CollectionController.index);
routes.post('/collections', CollectionController.store);

routes.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

module.exports = routes;
