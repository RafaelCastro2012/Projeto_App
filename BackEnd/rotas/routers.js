const express = require('express');
const controllerChampions = require('../controllers/controllerChampions');
const routers = express.Router();

routers.post('/registrar', controllerChampions.registrarUsuario);
routers.get('/listar', controllerChampions.listarUsuario);
routers.put('/editarReserva/:id', controllerChampions.atualizarUsuario);
routers.delete('/excluirReserva/:id', controllerChampions.deletarUsuario)
routers.post('/login', controllerChampions.login)
routers.post('/agendar', controllerChampions.agendamento);

module.exports = routers;