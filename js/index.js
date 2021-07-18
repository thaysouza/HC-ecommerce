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

    let carregando = `<p>carregando...<p>`

    let pronto = `<p>pedido enviado com sucesso!<p>`

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)
})