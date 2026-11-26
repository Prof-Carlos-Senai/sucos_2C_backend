const Usuario = require('../models/Usuario')

const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)

    if (!valores.nome || !valores.cpf || !valores.email || !valores.telefone) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' })
    }

    try {
        await Usuario.create(valores)
        res.status(201).json({ message: 'Usuario Cadastrado com sucesso!' })
    } catch (err) {
        console.error('Não foi possível cadastrar o Usuario', err)
        res.status(500).json({ message: 'Não foi possível cadastrar o Usuario' })
    }
}

const listar = async (req, res) => {
    try {
        const dados = await Usuario.findAll()
        res.status(200).json(dados)
    } catch (err) {
        console.error('Não foi possível listar os Usuarios', err)
        res.status(500).json({ message: 'Não foi possível listar os Usuarios' })
    }
}

const buscarPorCod = async (req, res) => {
    const id = req.params.id
    try {
        const dados = await Usuario.findByPk(id)
        if (!dados) {
            res.status(404).json({ message: 'Usuario não encontrado!' })
        } else {
            res.status(200).json(dados)
        }
    } catch (err) {
        console.error('Não foi possível encontrar o Usuario', err)
        res.status(500).json({ message: 'Não foi possível encontrar o Usuario' })
    }
}

const excluir = async (req, res) => {
    const id = req.params.id
    try {
        const dados = await Usuario.findByPk(id)
        if (!dados) {
            res.status(404).json({ message: 'Usuario não encontrado no banco de dados!' })
        } else {
            await Usuario.destroy({ where: { codUsuario: id } })
            res.status(200).json({ message: 'Usuario excluído com sucesso!' })
        }
    } catch (err) {
        console.error('Não foi possível excluir o Usuario', err)
        res.status(500).json({ message: 'Não foi possível excluir o Usuario' })
    }
}

const atualizar = async (req, res) => {
    const id = req.params.id
    const valores = req.body
    try {
        let dados = await Usuario.findByPk(id)
        if (!dados) {
            res.status(404).json({ message: 'Usuario não encontrado no banco de dados!' })
        } else {
            await Usuario.update(valores, { where: { codUsuario: id } })
            dados = await Usuario.findByPk(id)
            res.status(200).json(dados)
        }
    } catch (err) {
        console.error('Não foi possível atualizar o Usuario', err)
        res.status(500).json({ message: 'Não foi possível atualizar o Usuario' })
    }
}

module.exports = { cadastrar, listar, buscarPorCod, excluir, atualizar }