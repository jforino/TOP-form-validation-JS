const emailInputField = document.querySelector('input[name="email"]');
const passwordInputField = document.getElementById('password-field')
const passwordConfirmationInputField = document.getElementById('confirmation-password-field')
const form = document.querySelector('#input-form');

function emailFieldValidate(){

    emailInputField.addEventListener('input', () => {
        if(!emailInputField.value.endsWith('google.com')){
            emailInputField.setCustomValidity('email must end with "@google.com"')
        }
        else{
            emailInputField.setCustomValidity('');
        }
    })
}

function checkIfPasswordsMatch(){
    console.log(passwordInputField.value);
    
    if (passwordInputField.value !== passwordConfirmationInputField.value){
        passwordInputField.setCustomValidity('Passwords Must Match');
        passwordConfirmationInputField.setCustomValidity('Passwords Must Match');
    }
    else{
        passwordInputField.setCustomValidity(""); 
        passwordConfirmationInputField.setCustomValidity(""); 
    }
}


function formValidation() {
    emailFieldValidate();
    checkIfPasswordsMatch()

}

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    console.log('form submitted');
    formValidation();

})
