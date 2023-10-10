"use strict"
const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const alertMessage = document.querySelector('#alert');
const loginBtn = document.querySelector('#loginBtn');
let userDataList = [];
if (localStorage.getItem('userData') != null) {
    userDataList = JSON.parse(localStorage.getItem('userData'));
}
function logIn() {
    if (emptyInputs() == true) {
        alertMsg('All Inputs Are Required !', 'red')
    }
    else {
        if (checkInputs() == true) {
            window.location.href = 'HomePage.html';
        } else {
            alertMsg('Email or Password Are Wrong !', 'yellow')
        }
    }
}
function alertMsg(text, color) {
    alertMessage.classList.replace('d-none', 'd-block');
    alertMessage.innerHTML = text;
    alertMessage.style.color = color;
}
function checkInputs() {
    for (let index = 0; index < userDataList.length; index++) {
        if (userDataList[index].useremail == emailInput.value && userDataList[index].userpass == passwordInput.value
        ) {
            localStorage.setItem('userName', userDataList[index].username)
            return true;
        }
    }
}
function emptyInputs() {
    if (emailInput.value == '' || passwordInput.value == '')
        return true;
    else
        return false;
}
loginBtn.addEventListener('click', logIn);