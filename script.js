let menu = document.getElementsByClassName('menu-list');
let isOpen = false;

function batata(){
    isOpen = !isOpen
    isOpen ? menu[0].classList.add('open') : menu[0].classList.remove('open')
}