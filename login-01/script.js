let loginForm = document.querySelector(".my-form");
const login = document.querySelector(".my-form__button");
const email = document.getElementById("email");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    console.log('Email:', email.value);
    console.log('Password:', password.value);
    // process and send to API 
});

login.addEventListener("click", (e) => {
    const emailRegExp = /^[^@]+@[^\.]+\..+$/;
    e.preventDefault();
    mailValue = email.value;
    mdp = motDePasse.value;
    if (mailValue == "" || emailRegExp.test(mailValue) == false) {
      alert("Enter un email valide");
    } else if (mdp.length < 6) {
      alert("Votre mot de passe n'est pas valide");
    } else {
      window.location = "sidebar-01/index.html";
    }
  });
  