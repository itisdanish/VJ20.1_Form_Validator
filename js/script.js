const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input Error message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small');
    small.innerText = message
}

//Show Sucess
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// Check email is valid
function checkEmail(input){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailPattern.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, 'Email is not Valid')
    }
}

//Check Required Fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()=== ''){
            showError(input, `${input.id} is Required`)
        } else {
            showSuccess(input)
        }
    })
}

// Check input Length
function checkLength(input,min,max){
    if (input.value.length < min){
        showError(input,`${input.id} must be at least ${min}`)
    }else if(input.value.length > max){
        showError(input,`${input.id} must be less than ${max}`)
    }else
    showSuccess(input)
}

//Check Passwords match

function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match')
    }
}

// Event Listners
form.addEventListener('submit',function(e){
    e.preventDefault();
    
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25)
    checkEmail(email)
    checkPasswordsMatch(password,password2)
});