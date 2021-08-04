
function enviarLocalStorage() {

    const form = document.getElementById('form');


    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let email = document.getElementById('email').value;

        if (email == '' || email == null) {
            alert("Informe um e-mail válido!");

            /*
            function mostrarMsg() {
                const msg = document.getElementById('campo-msg');

                msg.classList.toggle('ativo');

            }
            mostrarMsg();*/

        } else {

            let data = {
                email
            }

            let convertData = JSON.stringify(data);

            localStorage.setItem('lead', convertData)

            let content = document.getElementById('content')

            let carregando = `<p style="padding: 40px; font-size: 20px; color: #ffc107;">Carregando...<p>`

            let pronto = `<p style="padding: 40px; font-size: 20px; color: #ffc107;">E-mail Enviado com Sucesso!<p>`

            content.innerHTML = carregando

            setTimeout(() => {
                content.innerHTML = pronto
            }, 1000)
        }
    })

}

enviarLocalStorage();



