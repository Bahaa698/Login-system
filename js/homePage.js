"use strict"
const logOutBtn = document.querySelector('#logOutBtn');
const UserMsg = document.querySelector('#UserMsg');
if (localStorage.getItem('userName') != null) {
    UserMsg.innerHTML = `Welcome ${localStorage.getItem('userName')}`;
    UserMsg.style.fontSize = '60px';
}

function logOut() {
    location.href='LogIn.html';
    localStorage.removeItem('userName');
};
logOutBtn.addEventListener('click', logOut);