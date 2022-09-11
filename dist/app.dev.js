"use strict";

var menu = document.querySelector('.hamburger-menu');
var menuItem = document.querySelector('.hamburger-item');
var nav = document.querySelector('.navbar');
var navbar = document.querySelector('.nav-item');
var showTrue = false;
menu.addEventListener('click', toggle);

function toggle() {
  if (!showTrue) {
    menuItem.classList.add('open');
    nav.classList.add('open');
    navbar.classList.add('open');
    showTrue = true;
  } else {
    menuItem.classList.remove('open');
    nav.classList.remove('open');
    navbar.classList.remove('open');
    showTrue = false;
  }
}