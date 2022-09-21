// // ASSIGNING VARIABLES

const submit = document.querySelector(".submit")
const error = document.querySelector(".error")
const form = document.querySelector("form")
const input = document.querySelector("input")
const label = document.querySelector("label")

// VALIDATING SUBMISSIONS

form.addEventListener("submit", validate)
submit.addEventListener("click", validate)

function validate(e) {
    e.preventDefault()

// ASSIGNING INPUTVALUE FROM EMAIL ADDRESS VALUE 
const inputValue = input.value.trim()


// EMAIL ADDRESS CHECK
// control flow showing different states depending on input
if(!isEmail(inputValue)) {
    error.style.display = "block";
    label.style.display = "block";
}  else {
    error.style.display = "none";
    label.style.display = "none";
}

// check if is email with Regex
function isEmail(input) {
    return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(input)
}

}