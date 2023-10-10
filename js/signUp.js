"use strict"
const userName = document.querySelector('#signUpNameInput');
const userEmail = document.querySelector('#signUpEmailInput');
const userPassword = document.querySelector('#signUpPasswordInput');
const signUpBtn = document.querySelector('#signUpBtn');
const alertMessage = document.querySelector('#alert');
let userDataList = [];
if (localStorage.getItem('userData') != null) {
    userDataList = JSON.parse(localStorage.getItem('userData'))
}

function userData() {
    let userObject = {
        username: userName.value,
        useremail: userEmail.value,
        userpass: userPassword.value
    }
    if (emptyInputs() == true) {
        alertMsg('All Inputs Are Required !', 'red')
    } else {
        if (emailExists() == true) {
            alertMsg('Email Already Exists !', 'Yellow')
        } else {
            userDataList.push(userObject);
            localStorage.setItem('userData', JSON.stringify(userDataList));
            clearForm();
            alertMsg('Registered Successfully', '#43214a');
        }
    }

};
function clearForm() {
    userName.value = '';
    userEmail.value = '';
    userPassword.value = ''
}
function emptyInputs() {
    if (userName.value == '' || userEmail.value == '' || userPassword.value == '')
        return true;
    else
        return false;
}
function alertMsg(text, color) {
    alertMessage.classList.replace('d-none', 'd-block');
    alertMessage.innerHTML = text;
    alertMessage.style.color = color;
}
function emailExists() {
    for (let i = 0; i < userDataList.length; i++) {
        if(userDataList[i].useremail == userEmail.value)
        return true;
    }
}
signUpBtn.addEventListener('click', userData);
