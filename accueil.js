const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const inscrit = document.getElementById("inscrit");

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Veuillez remplir cette case');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Veuillez remplir cette case');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email invalide');
    }
     else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Veuillez remplir cette case');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Veuillez remplir cette case');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Les mots de passes ne correspondent pas');
    }
     else {
        setSuccessFor(password2);
    }    
}

inscrit.addEventListener('click', (e) =>{
    window.location = "sidebar-01/index.html";
})

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^[^@]+@[^\.]+\..+$/.test(email)
}