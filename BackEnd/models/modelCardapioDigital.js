const { query } = require('../config/db');
const executeQuery = require('../services/query');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const modelCardapio = {

    login: async (email, senha) => {

        console.log(senha);
        try {
            const [consulta] = await modelCardapio.listarPorEmail(email);

            if (consulta) {

                const validarSenha = await bcrypt.compare(senha, consulta.senha)

                console.log(validarSenha);

                if (validarSenha) {
                    const token = jwt.sign(
                        { id: consulta.id, email: consulta.email },
                        process.env.JWT_SECRET, {
                        expiresIn: '25m'
                    }
                    )
                    return { token, id: consulta.id, nome: consulta.nome }
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
            return await executeQuery('SELECT id, nome, cpf, rg, data_nascimento, renumeracao_inicial, renumeracao_atual, observacao, status, email, senha FROM administrador WHERE email=?', [email])
        } catch (error) {
            throw error
        }
    },

    //Registrar
    cadastrar: async (nome, cpf, rg, data_nascimento, renumeracao_inicial, renumeracao_atual, observacao, status, email, senha) => {
        const password = await bcrypt.hash(senha, 10)
        try {
            return await executeQuery(`INSERT INTO administrador (nome, cpf, rg, data_nascimento, renumeracao_inicial, renumeracao_atual, observacao, status, email, senha) values (?,?,?,?,?,?,?,?,?,?)`, [nome, cpf, rg, data_nascimento, renumeracao_inicial, renumeracao_atual, observacao, status, email, password]);
        } catch (error) {
            throw error
        }
    },

    registrarProduto: async (nome, codigo, preco, ingredientes, descricao) => {
        try {
            return await executeQuery(`INSERT INTO produto (nome, codigo, preco, ingredientes, descricao) VALUES (?,?,?,?,?)`, [nome, codigo, preco, ingredientes, descricao])
        } catch (error) {
            throw error
        }
    },

    //Listar 
    listarProduto: async () => {
        try {
            return await executeQuery(`SELECT id, nome, codigo, preco, ingredientes , descricao FROM produto`)
        } catch (error) {
            throw error
        }
    },

    //Obter usuário por ID
    listarProdutoPorID: async (id) => {
        try {
            return await executeQuery(`SELECT * FROM produto WHERE id=?`, [id])
        } catch (error) {
            throw error
        }
    },

    //Atualizar
    atualizarProduto: async (nome, codigo, preco, ingredientes, descricao, id) => {
        console.log(preco)
        try {
            return await executeQuery(`UPDATE produto SET nome='${nome}', codigo = '${codigo}', preco ='${preco}', ingredientes ='${ingredientes}', descricao ='${descricao}' WHERE id=${id}`);
        } catch (error) {
            throw error
        }
    },

    //Deletar
    deletarProduto: async (id) => {
        try {
            return await executeQuery(`DELETE FROM produto WHERE id =? `, [id])
        } catch (error) {
            throw error
        }
    },
};

module.exports = modelCardapio;

