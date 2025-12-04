const modelChampions = require('../models/modelCardapioDigital');
const jwt = require('jsonwebtoken');
const code = require('../code');
const modelCardapio = require('../models/modelCardapioDigital');

const controllerCardapio = {
    
    login: async (req, res) => {
        const { email, senha } = req.body

        try {
            const consultaEmail = await modelCardapio.login(email, senha);
            
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
        const { nome, cpf, rg, data_nascimento, renumeracao_inicial, renumeracao_atual, observacao, status, email, senha } = req.body;
        console.log(req.body);
        try {
            const verificarEamil = await modelCardapio.listarPorEmail(email)
            if (verificarEamil.length > 0) {
                res.status(409).json({ msg: "Esse email já está sendo cadastrado, tente novamente!"})
            } else {
                try {
                    const registerUser = await modelCardapio.cadastrar(nome, cpf, rg, data_nascimento, renumeracao_inicial, renumeracao_atual, observacao, status, email, senha);
                    if (registerUser.affectedRows > 0) {
                        res.status(201).json({ msg: "Usuário cadastrado com sucesso" });
                    }
                    else {
                        res.status(404).json({ code: code.QUERY_ERROR });
                    }
                }
                catch (erro) {
                    console.log(erro)
                    res.status(500).json({ code: code.SERVER_ERROR });
                }
            }
        } catch (error) {
            res.status(500).json({code: code.message})
        }
    },

    registrarProduto: async (req,res) => {
        const{nome, codigo, preco, ingredientes, descricao}= req.body;
        try {
            const registerAgendamento = await modelCardapio.registrarProduto(nome, codigo, preco, ingredientes, descricao);
            if (registerAgendamento.affectedRows > 0) {
                res.status(201).json({ msg: "Cadastrado com sucesso" });
            } else {
                res.status(400).json({ msg: "Falha ao cadastrar" });
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Erro ao tentar cadastrar' });
        }
    },

    //Controller para listar
    listarProduto: async (req, res) => {
        try {
            const produto = await modelCardapio.listarProduto();
            res.status(200).json(produto);
        }
        catch (erro) {
            res.status(500).json({ error: "Erro ao listar os agendamentos" });
        }
    },

    //Controller para atualizar
    atualizarProduto: async (req, res) => {
        const { nome, codigo, preco, ingredientes, descricao } = req.body;
        try {
            const consulta = await modelCardapio.listarProdutoPorID(req.params.id);

            if (consulta.length > 0) {
                await modelCardapio.atualizarProduto(nome, codigo, preco, ingredientes, descricao, req.params.id);
                res.status(200).json({ msg: "Dados atualizados com sucesso!!!" });
            }
            else {
                res.status(404).json({ msg: `O ID ${req.params.id} não existe na base de dados` })
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
            const consulta = await modelCardapio.listarProduto(req.params.id)

            if (consulta.length > 0) {

                const resultado = await modelCardapio.deletarProduto(req.params.id);

                if (resultado.affectedRows > 0) {
                    res.status(204).end()
                }
                else {
                    res.status(404).json({ msg: "Erro ao deletar produto" })
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

module.exports = controllerCardapio;


