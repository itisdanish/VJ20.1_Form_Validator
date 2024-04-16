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

// Event Listners
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username, email, password, password2]);
});