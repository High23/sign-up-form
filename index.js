let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');


password.addEventListener("change", () => {
    password = document.querySelector('#password');
    confirmPassword = document.querySelector('#confirmPassword');
    checkPasswords(password, confirmPassword);
});

confirmPassword.addEventListener("change", () => {
    password = document.querySelector('#password');
    confirmPassword = document.querySelector('#confirmPassword');
    checkPasswords(password, confirmPassword);
});

function checkPasswords(passwordOne, passwordTwo){
    if (passwordOne.value === "" && passwordTwo === ""){
        passwordOne.classList.remove('good');
        passwordTwo.classList.remove('good');
        passwordOne.classList.remove('error');
        passwordTwo.classList.remove('error');
    } 
    else if (!(passwordOne.value === passwordTwo.value)){
        passwordOne.classList.add('error');
        passwordTwo.classList.add('error');
        passwordOne.classList.remove('good');
        passwordTwo.classList.remove('good');
    } 
    else {
        passwordOne.classList.remove('error');
        passwordTwo.classList.remove('error');
        passwordOne.classList.add('good');
        passwordTwo.classList.add('good');
    }
}