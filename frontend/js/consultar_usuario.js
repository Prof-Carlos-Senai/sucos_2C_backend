let resposta = document.getElementById('resposta')
let consult_usuario = document.getElementById('consult_usuario')

consult_usuario.addEventListener('click', (e) => {
    e.preventDefault()

    const codUsuario = document.getElementById('codUsuario').value
    
   

    fetch(`http://localhost:3000/usuario/${codUsuario}`,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(dados => {
        console.log(dados)

        resposta.innerHTML = ''
        resposta.innerHTML += `${dados.nome} <br>`
        resposta.innerHTML += `${dados.email} <br>`
        resposta.innerHTML += `${dados.cpf} <br>`
        resposta.innerHTML += `${dados.telefone} <br>`
    })
    .catch((err)=>{
        console.error('Erro ao consultar o usuário', err)
    })
})