
const forms = document.forms.main;
const email = forms.email;
const password = forms.password;
const confirmPassword = forms.confirmPassword;
const agreement = forms.check;
const signUp = forms.signUp

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
//повторить пароль тоже
const confirmPasswordPlaceholder = confirmPassword.placeholder;
confirmPassword.addEventListener('focus', function (e) {
    confirmPassword.placeholder = '';
});
confirmPassword.addEventListener('blur', function (e) {
    confirmPassword.placeholder = confirmPasswordPlaceholder;
});


// хочу чтобы при событии сабмит валю из инпут совалось охуеть нешта получилось
let clientsDatabase = [];
if (localStorage.getItem('client')) {
    clientsDatabase = JSON.parse(localStorage.getItem('client'));
}
forms.addEventListener('submit', function (event) {
    event.preventDefault();
    let client = {
        email: email.value,
        password: password.value,
    }
    if (password.value === confirmPassword.value) {
        event.preventDefault();
        clientsDatabase.push(client)
        localStorage.setItem('client', JSON.stringify(clientsDatabase))
        window.location.href = './index.html';

    } else {
        alert('Passwords do not look similar to me, try again darling');
    }
});


