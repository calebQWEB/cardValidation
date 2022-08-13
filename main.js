// CARDHOLDER NAME
const cardHolder = document.getElementById('name');
const cardName = document.getElementById('card-name');
const nameInput = document.querySelector('.name-input');

cardHolder.addEventListener('keyup', () => {
    cardvalue = cardHolder.value;
    cardName.innerHTML = cardvalue.toUpperCase();
});



// CARDHOLDER NUMBER
const cardNumber = document.getElementById('card-number');
const demoNumber = document.getElementById('demo-number');
const numberError = document.querySelector('.number-msg')

cardNumber.addEventListener('keyup', () => {
    numberValue = cardNumber.value;
    numberString = numberValue.toString();

    newNumber = numberString.match(/.{1,4}/g);
    demoNumber.textContent = newNumber.join(' ');

    if (isNaN(numberValue)) {
        numberError.style.visibility = "visible";
        numberError.innerHTML = "Wrong format, numbers only";

    } else {
        numberError.style.visibility = "hidden";
    }

});




// CARD-DATE
const expMonth = document.querySelector('.month');
const expYear = document.querySelector('.year');

const monthInput = document.querySelector('.exp-month')
const yearInput = document.querySelector('.exp-year')
const monthError = document.querySelector('.month-msg')

monthInput.addEventListener('keyup', () => {
    monthValue = monthInput.value;
    expMonth.innerHTML = monthValue;

    if (isNaN(monthValue)) {
        monthError.style.visibility = "visible";
        monthError.innerHTML = "numbers only";
    } else {
        monthError.style.visibility = "hidden";
    }
})

yearInput.addEventListener('keyup', () => {
    yearValue = yearInput.value;
    expYear.innerHTML = yearValue;

    if (isNaN(yearValue)) {
        monthError.style.visibility = "visible";
        monthError.innerHTML = "numbers only";
    } else {
        monthError.style.visibility = "hidden";
    }
})




// CVC
const cvcInput = document.getElementById('cvc');
const cardCvc = document.querySelector('.cvc');
const cvcError = document.querySelector('.cvc-msg');

cvcInput.addEventListener('keyup', () => {
    cvcValue = cvcInput.value;
    cardCvc.innerHTML = cvcValue;


    if (isNaN(cvcValue)) {
        cvcError.style.visibility = "visible";
        cvcError.innerHTML = "numbers only";
    } else {
        cvcError.style.visibility = "hidden";
    }
});


// BUTTON
const formButton = document.querySelector('.submit-button');
const mainForm = document.getElementById('form');
const appreciation = document.querySelector('.appreciation')
const allInput = document.getElementsByTagName('input');
const errorMsg = document.querySelector('.err-msg');
const holderMsg = document.querySelector('.holder-msg');

formButton.addEventListener('click', (e) => {
    cardvalue = cardHolder.value
    if (!cardvalue) {
        holderMsg.style.visibility = "visible"
        holderMsg.innerHTML = "Can't be blank";
        cardHolder.style.outlineColor = "hsl(0, 100%, 66%)"
        e.preventDefault()

    } else {
        holderMsg.style.visibility = "hidden"
        cardHolder.style.outlineColor = "hsl(270, 3%, 87%)"
    }

    // cardnumber
    numberValue = cardNumber.value;
    if (!numberValue) {
        numberError.style.visibility = "visible"
        numberError.innerHTML = "Can't be blank";
        cardNumber.style.outlineColor = "hsl(0, 100%, 66%)"
        e.preventDefault()

    } else {
        numberError.style.visibility = "hidden"
        cardNumber.style.outlineColor = "hsl(270, 3%, 87%)"
    }

    // month
    monthValue = monthInput.value;
    if (!monthValue) {
        monthError.style.visibility = "visible";
        monthError.innerHTML = "Can't be blank";
        monthInput.style.outlineColor = "hsl(0, 100%, 66%)"
        e.preventDefault()

    } else {
        monthError.style.visibility = "hidden"
        monthInput.style.outlineColor = "hsl(270, 3%, 87%)"
    }

    // year
    yearValue = yearInput.value;
    if (!yearValue) {
        monthError.style.visibility = "visible";
        monthError.innerHTML = "Can't be blank";
        yearInput.style.outlineColor = "hsl(0, 100%, 66%)"
        e.preventDefault()

    } else {
        monthError.style.visibility = "hidden";
        monthError.style.visibility = "hidden"
        yearInput.style.outlineColor = "hsl(270, 3%, 87%)"
    }

    // Cvc
    cvcValue = cvcInput.value;
    if (!cvcValue) {
        cvcError.style.visibility = "visible";
        cvcError.innerHTML = "Can't be blank";
        cvcInput.style.outlineColor = "hsl(0, 100%, 66%)"
        e.preventDefault()

    } else {
        cvcError.style.visibility = "hidden";
        cvcInput.style.outlineColor = "hsl(270, 3%, 87%)"
    }
 
});


mainForm.addEventListener('submit', (e) => {
    mainForm.style.display = "none";
    appreciation.style.display = "block"
});


// Reset button
const resetButton = document.querySelector('.reset-button').onclick = () => location.reload();

