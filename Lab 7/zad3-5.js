const form = document.getElementById('registration-form');
const submit_button = document.getElementById('submit_button');
submit_button.addEventListener('click', function(event) {
    event.preventDefault();

    if(validateForm()) {
        alert("Poprawnie wypełniono formularz");
    }
});

function validateForm() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const genderInput = document.getElementById('gender');
    const phoneInput = document.getElementById('phone');
    const birthdateInput = document.getElementById('birthdate');
    const countryInput = document.getElementById('country');
    let isValid = true;

    if (!hasValue(firstNameInput)) {
        displayErrorMessage(firstNameInput, 'Podaj swoje imię.', 'first-name-error');
        isValid = false;
    } else {
        hideErrorMessage('first-name-error');
    }

    if (!hasValue(lastNameInput)) {
        displayErrorMessage(lastNameInput, 'Podaj swoje nazwisko.', 'last-name-error');
        isValid = false;
    } else {
        hideErrorMessage('last-name-error');
    }

    if (!hasValue(emailInput)) {
        displayErrorMessage(emailInput, 'Podaj adres email.', 'email-error');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        displayErrorMessage(emailInput, 'Podaj poprawny adres email.', 'email-error');
        isValid = false;
    } else {
        hideErrorMessage('email-error');
    }

    if (!hasValue(passwordInput)) {
        displayErrorMessage(passwordInput, 'Podaj hasło.', 'password-error');
        isValid = false;
    } else if (!isStrongPassword(passwordInput.value)) {
        displayErrorMessage(passwordInput, 'Hasło musi mieć co najmniej 8 znaków.', 'password-error');
        isValid = false;
    } else {
        hideErrorMessage('password-error');
    }

    if (!hasValue(confirmPasswordInput)) {
        displayErrorMessage(confirmPasswordInput, 'Powtórz hasło.', 'confirm-password-error');
            isValid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        displayErrorMessage(confirmPasswordInput, 'Hasło nie pasuje.', 'confirm-password-error');
        isValid = false;
    } else {
        hideErrorMessage('confirm-password-error');
    }

    if (!hasValue(genderInput)) {
        displayErrorMessage(genderInput, 'Wybierz płeć.', 'gender-error');
        isValid = false;
    } else {
        hideErrorMessage('gender-error');
    }

    if (!hasValue(phoneInput)) {
        displayErrorMessage(phoneInput, 'Podaj numer telefonu.', 'phone-error');
        isValid = false;
    } else {
        hideErrorMessage('phone-error');
    }

    if (!hasValue(birthdateInput)) {
        displayErrorMessage(birthdateInput, 'Podaj datę urodzenia.', 'birthdate-error');
        isValid = false;
    } else if (!validateBirthdate(birthdateInput.value)) {
        displayErrorMessage(birthdateInput, 'Musisz mieć co najmniej 18 lat.', 'birthdate-error');
        isValid = false;
    } else {
        hideErrorMessage('birthdate-error');
    }

    if (!hasValue(countryInput)) {
        displayErrorMessage(countryInput, 'Podaj kraj.', 'country-error');
        isValid = false;
    } else {
        hideErrorMessage('country-error');
    }

    return isValid;
}

function hasValue(input) {
    return input.value.trim() !== '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isStrongPassword(password) {
    return password.length >= 8;
    }

function validateBirthdate(birthdate) {
    const today = new Date();
    const birthdateDate = new Date(birthdate);
    const age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
        age--;
    }
    return age >= 18;
}

function displayErrorMessage(inputElement, message, errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
}

function hideErrorMessage(errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = '';
}