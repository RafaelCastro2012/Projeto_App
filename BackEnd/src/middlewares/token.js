const jwt = require('jsonwebtoken')
require('dotenv').config()

const verificarToken = (req, res, next) => {

    const header = req.header('authorization')

    if (!header) { 
        return res.status(401).json({ msg: "Acesso negado. Token não fornecido" })
    }
    const token = header.split(' ')[1] 

    if (!token) {
        return res.status(401).json({ msg: "Acesso negado. Token não fornecido" })
    }
    try {
        const verificar = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verificar 
        next() 
    }
    catch (erro) {
        res.status(400).json({ msg: "Token inválido" })
    }
}

module.exports = verificarToken