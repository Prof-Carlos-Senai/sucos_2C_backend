let resposta = document.getElementById('resposta')
let cad_usuario = document.getElementById('cad_usuario')

cad_usuario.addEventListener('click', (e) => {
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const cpf = document.getElementById('cpf').value
    const telefone = document.getElementById('telefone').value

    const valores = {
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone
    }

    fetch('http://localhost:3000/usuario',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados => {
        console.log(dados)

        resposta.innerHTML = ''
        resposta.innerHTML += `${dados.message}`
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar o usuário', err)
    })
})