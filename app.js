const menu  = document.querySelector('.hamburger-menu');
const menuItem = document.querySelector('.hamburger-item');

const nav = document.querySelector('.navbar');
const navbar = document.querySelector('.nav-item');
let showTrue = false;

menu.addEventListener('click', toggle);

function toggle(){
    if(!showTrue){
        menuItem.classList.add('open');
        nav.classList.add('open');
        navbar.classList.add('open');
        showTrue = true;
    }
    else{
        menuItem.classList.remove('open');
        nav.classList.remove('open');
        navbar.classList.remove('open');
        showTrue = false;
    }
}
