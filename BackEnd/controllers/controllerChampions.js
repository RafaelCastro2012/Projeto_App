const modelChampions = require('../models/modelChampions');
const jwt = require('jsonwebtoken')
const code = require('../code');
const e = require('express');
const controllerChampions = {

    login: async (req, res) => {
        const { email, senha } = req.body

        console.log(req.body);

        try {
            const consultaEmail = await modelChampions.login(email, senha);
            if (consultaEmail) {
                res.status(200).json(consultaEmail)
            } else {
                res.status(401).json({msg: "Email ou senha incorretos"})
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.message)
        }
    },

    //Controller para registrar 
    registrarUsuario: async (req, res) => {
        const { nome, sobrenome, data_nascimento, cpf, nmr_telefone, email, senha } = req.body;

        console.log(req.body);

        try {
            const verificarEamil = await modelChampions.listarPorEmail(email)
            if (verificarEamil.length > 0) {
                res.status(409).json({ msg: "Esse email já está sendo cadastrado, tente novamente!"})
            } else {

                try {
                    const registerUser = await modelChampions.cadastrar(nome, sobrenome, data_nascimento, cpf, nmr_telefone, email, senha);
                    if (registerUser.cadastrarUsuario.affectedRows > 0 && registerUser.cadastrarTelefone.affectedRows > 0) {
                        res.status(201).json({ msg: "Usuário cadastrado com sucesso" });
                    }
                    else {
                        res.status(404).json({ code: code.QUERY_ERROR });
                    }
                }
                catch (erro) {
                    res.status(500).json({ code: code.SERVER_ERROR });
                }
            }
        } catch (error) {
            res.status(500).json({code: code.message})
        }
    },

    agendamento: async (req,res) => {
        const{data_inicio, hora, forma_pagamento, usuario_id}= req.body;
        try {
            const registerAgendamento = await modelChampions.registrarAgendamento(data_inicio, hora, forma_pagamento, usuario_id);
            if (registerAgendamento.affectedRows > 0) {
                res.status(201).json({ msg: "Agendado com sucesso" });
            } else {
                res.status(400).json({ msg: "Falha ao realizar agendamento" });
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Erro ao tentar agendar' });
        }
    },

    //Controller para listar
    listarUsuario: async (req, res) => {
        try {
            const usuarios = await modelChampions.listar();
            res.status(200).json(usuarios);
        }
        catch (erro) {
            res.status(500).json({ error: "Erro ao listar os agendamentos" });
        }
    },

    //Controller para atualizar
    atualizarUsuario: async (req, res) => {
        const { data_inicio, hora, forma_pagamento} = req.body;
        try {
            const consulta = await modelChampions.listarPorID(req.params.id);

            if (consulta.length > 0) {
                await modelChampions.atualizar(data_inicio, hora, forma_pagamento, req.params.id);
                res.status(200).json({ msg: "Dados atualizados com sucesso!!!" });
            }
            else {
                res.status(404).json({ msg: `O ID ${req.params.id} não existe na base de dados` })
                console.log(r)
            }
        }
        catch (erro) {
            console.log(erro)
            res.status(500).json({ error: 'Erro ao tentar atualizar' });
        }
    },

    //Controller para deletar
    deletarUsuario: async (req, res) => {
        try {
            const consulta = await modelChampions.listarPorID(req.params.id)

            if (consulta.length > 0) {

                const resultado = await modelChampions.deletar(req.params.id);

                if (resultado.affectedRows > 0) {
                    res.status(204).end()
                }
                else {
                    res.status(404).json({ msg: "Erro ao deletar a reserva" })
                }
            }
            else {
                res.status(404).json({ msg: "O ID não existe na base de dados" })
                console.log(consulta)
            }
        }
        catch (erro) {
            res.status(500).json({ error: 'Erro ao tentar deletar' });
            console.log(erro)
        }
    },
};

module.exports = controllerChampions;


