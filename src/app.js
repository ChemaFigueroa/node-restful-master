const express = require('express');
const app = express();
const puerto = 80;
//const TemasController = require('./controllers/TemasController');
const CategoriaController = require('./controllers/CategoriaController');
const TipoPagoController = require('./controllers/TipoPagoController');
const PersonaController = require('./controllers/PersonaController');
const ProductosController = require('./controllers/ProductosController');


app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Prueba 123456789012!');
});

app.get('/*', function (req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Recurso no encontrado');
});



app.post('/categoria', CategoriaController.agregar);
app.get('/categoria', CategoriaController.indexGet);
app.get('/categoria/:id([0-9]+)', CategoriaController.itemGet);
app.put('/categoria/:id([0-9]+)', CategoriaController.editar);
app.patch('/categoria/:id([0-9]+)', CategoriaController.itemPatch);


app.post('/tipopago', TipoPagoController .agregar);
app.get('/tipopago', TipoPagoController .indexGet);
app.get('/tipopago/:id([0-9]+)', TipoPagoController.itemGet);
app.put('/tipopago/:id([0-9]+)', TipoPagoController.editar);
app.patch('/tipopago/:id([0-9]+)', TipoPagoController.itemPatch);


app.post('/persona', PersonaController.agregar);
app.get('/persona', PersonaController.indexGet);
app.get('/persona/:id([0-9]+)',PersonaController.itemGet);
app.put('/persona/:id([0-9]+)',PersonaController.editar);
app.patch('/persona/:id([0-9]+)',PersonaController.itemPatch);


app.post('/producto', ProductosController.agregar);
app.get('/producto', ProductosController.indexGet);
app.get('/producto/:id([0-9]+)',ProductosController.itemGet);
app.put('/producto/:id([0-9]+)',ProductosController.editar);
app.patch('/producto/:id([0-9]+)',ProductosController.itemPatch);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});