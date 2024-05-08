const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListerner('click', () => {
    modal_container.classList.add('show');
});

open.addEventListerner('click', () => {
    modal_container.classList.remove('show');
});