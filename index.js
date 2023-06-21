createAccountButton = document.querySelector('#createAccount');
createAccountButton.addEventListener('click', () => {
    password = document.querySelector('#password');
    confirmPassword = document.querySelector('#confirmPassword');
    if (!(password.value === confirmPassword.value)){
        password.classList.add('error');
        confirmPassword.classList.add('error');
    } else {
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
    }
});

