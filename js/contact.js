const form = document.querySelector(".form");

//name
const formName = document.querySelector("#form__name");
const formNameError = document.querySelector("#form__name-error");
let formNameHasError = false;

//email
const formEmail = document.querySelector("#form__email");
const formEmailError = document.querySelector("#form__email-error");
let formEmailHasError = false;

//message
const formMessage = document.querySelector("#form__message");
const formMessageError = document.querySelector("#form__message-error");
let formMessageHasError = false;

const submitMessage = document.querySelector("#form__submit-message");


form.addEventListener("submit", formValidation);

function formValidation() {
    event.preventDefault();

    //name
    const formNameValue = formName.value;

    if (validateLength(formNameValue, 4) === true) {
        formNameError.style.display = "none";
        formNameHasError = false;
    } else {
        formNameError.style.display = "block";
        formNameHasError = true;
    }

    //email
    const formEmailValue = formEmail.value;

    if (validateFormEmail(formEmailValue)) {
        formEmailError.style.display = "none";
        formEmailHasError = false;
    } else {
        formEmailError.style.display = "block";
        formEmailHasError = true;
    }

    //message
    const formMessageValue = formMessage.value;

    if (validateLength(formMessageValue, 6) === true) {
        formMessageError.style.display = "none";
        formMessageHasError = false;
    } else {
        formMessageError.style.display = "block";
        formMessageHasError = true;
    }

    // submit message 
    if (formNameHasError === true || formEmailHasError === true || formMessageHasError === true) {
        submitMessage.style.display = "none";
    } else {
        submitMessage.style.display = "block";
        formName.value = "";
        formEmail.value = "";
        formMessage.value = "";

        console.log("message was submitted!");
    }
}

function validateLength(value, checkLength) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= checkLength) {
        return true;
    } else {
        return false;
    }
}

function validateFormEmail(formEmailValue) {
    const registration = /\S+@\S+\.\S+/;

    if (registration.test(formEmailValue)) {
        return true;
    } else {
        return false;
    }
}