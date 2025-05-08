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

function setPasswordMatchLogic(){

    if (passwordInputField.value !== passwordConfirmationInputField.value){
        passwordInputField.setCustomValidity('Passwords Must Match');
        passwordConfirmationInputField.setCustomValidity('Passwords Must Match');
    }
    else{
        passwordInputField.setCustomValidity(""); 
        passwordConfirmationInputField.setCustomValidity(""); 
    }
}

function checkIfPasswordsMatch(){
    passwordInputField.addEventListener('input', setPasswordMatchLogic); 
    passwordConfirmationInputField.addEventListener('input', setPasswordMatchLogic);
}

function checkPasswordRequirements(){

    passwordInputField.addEventListener('input', () => {
        const passwordRegex = /[!@#$%^&*(),.?":{}|<>]/;

        if(!passwordRegex.test(passwordInputField.value)){
            passwordInputField.setCustomValidity('Password must contain a special char');
        }
        else{
            passwordInputField.setCustomValidity(''); 
        }
    })
 
}


function formValidation() {
    emailFieldValidate();
    checkIfPasswordsMatch();
    checkPasswordRequirements();

}

form.addEventListener('submit', (e) => {
    
    e.preventDefault(); 

    formValidation();
    

    console.log('form submitted');
    

})
