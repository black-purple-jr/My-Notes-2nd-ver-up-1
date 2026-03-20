"use strict";

const body = document.body;
const drawerTriger = document.getElementById('drawerTriger');
const closeBtn = document.getElementById('closeBtn');
let drawer = document.querySelector('.drawer');

drawerTriger.onclick = () => {
    drawer.style.left = '0';
    if(drawer.style.left = '0'){
        body.style.overflowY = 'hidden';
    }
}
closeBtn.onclick = () => {
    drawer.style.left = '-300px';
    if(drawer.style.left = '-300px'){
        body.style.overflowY = 'visible';
    }
}
