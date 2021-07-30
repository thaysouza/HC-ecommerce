function typeWriter(e) {
    const textArray = e.innerHTML.split('');
    e.innerHTML = '';

    textArray.forEach((letra, index) => {
        setTimeout(() => {
            e.innerHTML += letra;
        }, 80 * index)
    })
}

const titulo = document.querySelector('.info-email');

typeWriter(titulo);


