const express = require('express');
const controllerCardapio = require('../controllers/controllerCardapioDigital');
const routers = express.Router();

routers.post('/registrar', controllerCardapio.registrarUsuario);
routers.get('/listar', controllerCardapio.listarProduto);
routers.put('/editarProduto/:id', controllerCardapio.atualizarProduto);
routers.delete('/excluirProduto/:id', controllerCardapio.deletarUsuario)
routers.post('/login', controllerCardapio.login)
routers.post('/registrarproduto', controllerCardapio.registrarProduto);

module.exports = routers;