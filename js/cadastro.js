

function enviarLocalStorageCadastro() {

    const form = document.getElementById('formCadastro');


    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let nome = document.getElementById('nomeCadastro').value;
        let email = document.getElementById('emailCadastro').value;
        let telefone = document.getElementById('telefoneCadastro').value;

        if (nome == '' || nome == null) {
            alert("Informe um nome válido!");
            nome.focus();

            return;

        } if (email == '' || email == null) {
            alert("Informe um e-mail válido!");
            email.focus();
            return;
        }
        if (telefone == '' || telefone == null) {
            alert("Informe um telefone válido!");
            telefone.focus();
            return;
        }



        else {

            let data = {
                nome,
                email,
                telefone
            }

            let convertData = JSON.stringify(data);

            localStorage.setItem('lead', convertData)

            alert("Cadastro realizado com sucesso!")

            window.location.reload();
        }
    })

}

enviarLocalStorageCadastro();

