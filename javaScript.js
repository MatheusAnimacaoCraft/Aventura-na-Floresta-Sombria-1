// script.js

const secoes = document.querySelectorAll('.capitulo');
const botoes = document.querySelectorAll('.escolha');

function mostrarSecao(escolha) {
    secoes.forEach(secao => {
        if (secao.id === escolha) {
            secao.style.display = 'block';
        } else {
            secao.style.display = 'none';
        }
    });
}

botoes.forEach(botao => {
    botao.addEventListener('click', (event) => {
        const escolha = event.target.getAttribute('data-escolha');
        mostrarSecao(escolha);
    });
});

mostrarSecao('inicio');
