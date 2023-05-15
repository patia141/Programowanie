//zad 2

/*
function validForm() {
    if(requiredValidation(nameField) || requiredValidation(surnameField) || requiredValidation(emailField)
    //|| requiredValidation(provinceField)
    || requiredValidation(birthDateField)
    //requiredValidation(countryField)
    || minLengthValidation(nameField, 2) || minLengthValidation(surnameField, 2) || minLengthValidation(emailField, 2)
    //validAge() || validConfirmPassword()
    //|| requiredValidation(adressField) || minLengthValidation(adressField, 3)
    || (!chceckboxField.checked && (requiredValidation(concactAddressField) || minLengthValidation))
    ) {
        return false;
    }
} */

//
//baza
//

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(validForm()) {
        alert('Sukces');
    }
});

//
//pola
//

const nameField = document.querySelector("[name='name']");
nameField.addEventListener('input', () => {
    requiredValidation(nameField);
    minLengthValidation(nameField, 2);
});

const surnameField = document.querySelector("[name='surname']");
nameField.addEventListener('input', () => {
    requiredValidation(surnameField);
    minLengthValidation(surnameField, 2);
});

const emailField = document.querySelector("[name='email']");
nameField.addEventListener('input', () => {
    requiredValidation(emailField);
    minLengthValidation(emailField, 2);
    emailValidation(emailField);
});

const passwordField = document.querySelector("[name='password']");
nameField.addEventListener('input', () => {
    requiredValidation(passwordField);
    minLengthValidation(passwordField, 8);
});

const genderField = document.querySelector("[name='gender']");
nameField.addEventListener('input', () => {
    requiredValidation(nameField);
    minLengthValidation(nameField, 2);
});

//
//zad 2 - walidacja
//

function requiredValidation(field) {
    //zad 3 - span i errorField
    //const errorField = document.querySelector(`[name='${field.name}'] + span.error`);
    if(!field.value || field.value === '') {
        field.setCustomValidity('To pole jest wymagane');
        //errorField.innerHTML = 'To pole jest wymagane';
        return true;
    }
    else {
        field.setCustomValidity('');
        //errorField.innerHTML = '';
        return false;
    }
}

function minLengthValidation(field, minLength = 0) {
    //const errorField = document.querySelector(`[name='${field.name}'] + span.error`);
    if(field.value.length < minLength) {
        //field.setCustomValidity(`To pole musi mieć conajmniej ${minLength} znaków`);
        errorField.innerHTML = `To pole musi mieć conajmniej ${minLength} znaków`;
        return true;
    } else {
        //field.setCustomValidity('');
        errorField.innerHTML = '';
        return false;
    }
}

function maxLengthValidation(field, maxLength = 0) {
    const errorField = document.querySelector(`[name='${field.name}'] + span.error`);
    if(field.value.length > maxLength) {
        //field.setCustomValidity(`To pole musi mieć conajwyżej ${minLength} znaków`);
        errorField.innerHTML = `To pole musi mieć conajwyżej ${minLength} znaków`;
        return true;
    } else {
        //field.setCustomValidity('');
        errorField.innerHTML = '';
        return !result;
    }
}

function emailValidation(field) {
    const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
    //const errorField = document.querySelector(`[name='${field.name}'] + span.error`);
    if(!emailRegex.test(field.value)) {
        field.setCustomValidity("Proszę podać poprawny adres email.");
        //errorField.innerHTML = "Proszę podać poprawny adres email.";
        return true;
    } else {
        //zad 2
        //field.setCustomValidity = '';
        errorField.innerHTML = '';
        return false;
    }
}

function passwordValidation(field) {
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
    const errorField = document.querySelector(`[name='${field.name}'] + span.error`);
    if(!passwordRegex.test(field.value)) {
        //field.setCustomValidity("Hasło musi mieć co najmniej 8 znaków i zawierać przynajmniej jedną cyfrę, jedną małą literę, jedną dużą literę i znak specjalny.");
        errorField.innerHTML = "Hasło musi mieć co najmniej 8 znaków i zawierać przynajmniej jedną cyfrę, jedną małą literę, jedną dużą literę i znak specjalny.";
        return true;
    } else {
        //field.setCustomValidity('');
        errorField.innerHTML = '';
        return false;
    }
}