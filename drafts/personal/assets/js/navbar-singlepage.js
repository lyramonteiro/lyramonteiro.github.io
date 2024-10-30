// NAVBAR SINGLEPAGE
// Última att.: ago/2024, Lyra Monteiro.
// Adicione a classe .navbar__hamburguer no botão hamburguer, a classe .navbar__overlay no menu e a classe .navbar__close no botão de fechar.
// Adicione a classe .mobile__anchor nos links do menu.

const HAMBURGUER = document.querySelector('.navbar__hamburguer');
const MENU = document.querySelector('.navbar__overlay');
const CLOSE = document.querySelector('.navbar__close');
const ANCHORS = document.querySelectorAll('.mobile__anchor');

HAMBURGUER.addEventListener('click', () => {
    MENU.classList.toggle('open');
})

CLOSE.addEventListener('click', () => {
    MENU.classList.toggle('open');
})

ANCHORS.forEach(anchor => {
    anchor.addEventListener('click', () => {
        MENU.classList.toggle('open');
    })
});
