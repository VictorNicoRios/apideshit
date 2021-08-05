var express = require('express');
var router = express.Router();
var personajes = require('./personajes.json')

/* Index normal */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Devuelve todos los personajes */
router.get('/personajes', function(req, res, next) {
  res.send(personajes)
});

module.exports = router;
