const Suco = require('../models/Suco')
const Usuario = require('../models/Usuario')

const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)

    if (!valores.sabor || !valores.volume || !valores.quantidade || !valores.preco || !valores.idUsuario) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' })
    }

    try {
        const usuarioExiste = await Usuario.findByPk(valores.idUsuario)
        if (!usuarioExiste) {
            return res.status(404).json({ message: 'Usuario informado não encontrado!' })
        }

        await Suco.create(valores)
        res.status(201).json({ message: 'Suco Cadastrado com sucesso!' })
    } catch (err) {
        console.error('Não foi possível cadastrar o Suco', err)
        res.status(500).json({ message: 'Não foi possível cadastrar o Suco' })
    }
}

module.exports = { cadastrar }