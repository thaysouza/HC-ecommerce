const form = document.getElementById('form');



form.addEventListener('submit', (event) => {
    event.preventDefault();

    let email = document.getElementById('email').value;

    let data = {
        email
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')

    let carregando = `<p style="margin-top: 50px; font-size: 20px; color: #ffc107;">Carregando...<p>`

    let pronto = `<p style="margin-top: 50px; font-size: 20px; color: #ffc107;">Pedido Enviada com Sucesso!<p>`

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)
})