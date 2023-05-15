const form = document.getElementById('registration-form');
const submit_button = document.getElementById('submit_button');

submit_button.addEventListener('click', function(event) {
    event.preventDefault();

    if (validateForm()) {
    alert("Poprawnie wypełniono formularz");
    }
});

function validateForm() {
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const genderInput = document.getElementById('gender');
    const phoneInput = document.getElementById('phone');
    const birthdateInput = document.getElementById('birthdate');
    const countryInput = document.getElementById('country');
    let isValid = true;

    if (!hasValue(firstNameInput)) {
        displayErrorMessage(firstNameInput, 'Podaj swoje imię.');
        isValid = false;
      }

      else if (!hasValue(lastNameInput)) {
        displayErrorMessage(lastNameInput, 'Podaj swoje nazwisko.');
        isValid = false;
      }

      else if (!hasValue(emailInput)) {
        displayErrorMessage(emailInput, 'Podaj adres email.');
        isValid = false;
      } else if (!isValidEmail(emailInput.value)) {
        displayErrorMessage(emailInput, 'Podaj poprawny adres email.');
        isValid = false;
      }

      else if (!hasValue(passwordInput)) {
        displayErrorMessage(passwordInput, 'Podaj hasło.');
        isValid = false;
      } else if (!isStrongPassword(passwordInput.value)) {
        displayErrorMessage(passwordInput, 'Hasło musi mieć co najmniej 8 znaków.');
        isValid = false;
      }

      else if (!hasValue(genderInput)) {
        displayErrorMessage(genderInput, 'Wybierz płeć.');
        isValid = false;
      }

      else if (!hasValue(phoneInput)) {
        displayErrorMessage(phoneInput, 'Podaj numer telefonu.');
        isValid = false;
      }

      else if (!hasValue(birthdateInput)) {
        displayErrorMessage(birthdateInput, 'Podaj datę urodzenia.');
        isValid = false;
      }

      else if (!hasValue(countryInput)) {
        displayErrorMessage(countryInput, 'Podaj kraj.');
        isValid = false;
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

    function displayErrorMessage(inputElement, message) {
      inputElement.setCustomValidity(message);
      inputElement.reportValidity();
    }