console.log('Add validation!');

let form = document.getElementById("parking-form");
let nameInput = document.getElementById("name");
let yearInput = document.getElementById("car-year");
let makeInput = document.getElementById("car-make");
let modelInput = document.getElementById("car-model")
start-Date
days
credit-card
cvv
expiration

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    validateName(nameInput)
})


function validateName (input) {
    let errorName = document.createElement('p')
    errorName.id = 'name-input-error'
    console.log(input.value)
    
    if (input.value !== ''){
        console.log('Valid')
        input.classList.remove('input-invalid')
        input.classList.add('input-valid')
        document.getElementById('name-input-error').remove()
    } else {
        if (document.getElementById('name-input-error')) {
            document.getElementById('name-input-error').remove()
        }
        errorName.innerText = 'This is a required field'
        document.getElementById('name-field').appendChild(errorName)
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
    
}
// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }