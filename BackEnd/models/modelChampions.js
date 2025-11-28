const { query } = require('../config/db');
const executeQuery = require('../services/query');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const modelChampions = {

    login: async (email, senha) => {

        console.log(email);
        try {
            const consulta = await modelChampions.listarPorEmail(email);

            if (consulta) {
                const match = await bcrypt.compare(senha, consulta[0].senha)
                if (match) {
                    const token = jwt.sign(
                        { id: consulta[0].id, email: consulta[0].email},
                        process.env.JWT_SECRET,{
                            expiresIn: '25m'
                        }
                    )
                    return {token, id:consulta[0].id, nome:consulta[0].nome}
                }
                return null
            }
            return null
        } 
        catch (error) {
            throw error
        }
    },

    listarPorEmail: async (email) => {
        try {
           return await executeQuery('SELECT id, nome, sobrenome, data_nascimento, cpf, email, senha FROM usuario WHERE email=?', [email])
        } catch (error) {
            throw error
        }
    },

    listarPorTelefone: async (id) => {
        try {
            const [idTelefone] = await executeQuery(`SELECT id FROM telefone WHERE usuario_id=?`, [id]);
            return idTelefone;

        } catch (error) {
            throw error
        }
    },

    //Registrar
    cadastrar: async (nome, sobrenome, data_nascimento, cpf, nmr_telefone, email, senha) => {
        const password = await bcrypt.hash(senha, 10)
        try {
            const cadastrarUsuario = await executeQuery(`INSERT INTO usuario (nome, sobrenome, data_nascimento, cpf, email, senha) values (?,?,?,?,?,?)`,[nome, sobrenome, data_nascimento, cpf, email, password]);
            if (cadastrarUsuario.affectedRows > 0) {
                const usuarioId = cadastrarUsuario.insertId
                console.log(nmr_telefone, usuarioId)
                const cadastrarTelefone = await executeQuery(`INSERT INTO telefone (nmr_telefone, usuario_id) values(?,?)`, [nmr_telefone, usuarioId])
                if (cadastrarTelefone.affectedRows > 0) {
                    return {cadastrarUsuario, cadastrarTelefone}
                } else {
                    return null
                }
            } else{
                return null
            }
            
        } catch (error) {
            console.log(error)
            throw error
        }
    },

    registrarAgendamento: async (data_inicio, hora, forma_pagamento, usuario_id) => {
        try {
            return await executeQuery(`INSERT INTO agendamento (data_inicio, hora, forma_pagamento, usuario_id) VALUES (?,?,?,?)`, [data_inicio,hora,forma_pagamento, usuario_id])
        } catch (error) {
            throw error
        }
    },

    //Listar 
    listar: async () => {
        try {
            return await executeQuery(`SELECT agendamento.data_inicio, agendamento.hora, usuario.nome FROM agendamento LEFT JOIN usuario ON usuario.id = agendamento.usuario_id;`)
        } catch (error) {
            throw error
        }
    },

    //Obter usuário por ID
    listarPorID: async (id) => {
        try {
            return await executeQuery(`SELECT * FROM agendamento WHERE id=?`, [id])
        } catch (error) {
            throw error
        }
    },

    //Atualizar
    atualizar: async (data_inicio, hora, forma_pagamento, id) => {
        try {
            return await executeQuery(`UPDATE agendamento SET data_inicio='${data_inicio}',hora='${hora}', forma_pagamento='${forma_pagamento}' WHERE id=${id};`)
        } catch (error) {
            throw error
        }
    },

    //Deletar
    deletar: async (id) => {
        try {
            return await executeQuery(`DELETE FROM agendamento WHERE id=?`, [id])
        } catch (error) {
            throw error
        }
    },
};

module.exports = modelChampions;

