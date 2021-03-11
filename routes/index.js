var express = require('express');
var router = express.Router();

var personajes = require('./personajes.json')
/*var maps = require('./maps.json')

/* Index normal */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Devuelve todos los personajes */
router.get('/personajes', function(req, res, next) {
  res.send(personajes)
});

/* Devuelve todos los mapas 
router.get('/mapas', function(req, res, next) {
  res.send(maps)
});*/

module.exports = router;
