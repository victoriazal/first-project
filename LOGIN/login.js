const forms = document.forms.main;
const email = forms.email;
const password = forms.password;
const confirmPassword = forms.confirmPassword;
const agreement = forms.check;
const signUp = forms.signUp

const SignUpClients = localStorage.getItem('client');
const ObjSignUpClients = JSON.parse(SignUpClients);
console.log(SignUpClients);
console.log(typeof JSON.parse(SignUpClients));

for (key in ObjSignUpClients) {
    console.log(ObjSignUpClients[key].email)
    console.log(ObjSignUpClients[key].password)
    forms.addEventListener('submit', function (event) {
        event.preventDefault();
        if (email.value === ObjSignUpClients[key].email && password.value === ObjSignUpClients[key].password) {
            window.location.href = './menu.html';
        }
        else {
            alert('user not found please Sign Up')
        }
    });
}

//делаем так чтобы плэйсхолдер исчезал
const emailPlaceholder = email.placeholder;
email.addEventListener('focus', function (e) {
    email.placeholder = '';
});
email.addEventListener('blur', function (e) {
    email.placeholder = emailPlaceholder;
});

//пароль просто чтобы плэйсхолдер хавался 
const passwordPlaceholder = password.placeholder;
password.addEventListener('focus', function (e) {
    password.placeholder = '';
});
password.addEventListener('blur', function (e) {
    password.placeholder = passwordPlaceholder;
});