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


// Event Listners
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value== ''){
        showError(username,'Username is Required');
    }else{
        showSuccess(username)
    }
});