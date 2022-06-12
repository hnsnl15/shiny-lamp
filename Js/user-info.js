// Global Variables
const display = document.getElementById('display');
const mainForm = document.getElementById('patient-form-check-up');
const formLogOut = document.getElementById('log-out-form');
const logoutBtn = document.getElementById('log-out-btn');
const fnameInput = document.getElementById('fname-input-field').value;
const lnameInput = document.getElementById('lname-input-field').value;
const mnameInput = document.getElementById('mname-input-field').value;
const addressField = document.getElementById('address-input-field').value;
const contactField = document.getElementById('contact-input-field').value;
const birthday = document.getElementById('bday-input-field');
const asthma = document.getElementById('asthma');
const cancer = document.getElementById('cancer');
const cds = document.getElementById('cardiac-disease');
const diabetes = document.getElementById('diabetes');
const hpt = document.getElementById('hypertension');
const psd = document.getElementById('psychiatric-disorder');
const epi = document.getElementById('epilepsy');
const others = document.getElementById('others');
const none = document.getElementById('none');
const symptomsList = document.getElementById('current-symptoms-option').value;
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const submitBtn = document.getElementById('submit-btn-patient-form');



const specialChar = /[a-zA-Z0-9\-\/]/;
const numberOnly = /[0-9]/;
const capletterOnly = /[A-Z]/
const smallLetters = /[a-z]/



const validateInput = () => {

    if (
        !fnameInput.match(specialChar)
        && !lnameInput.match(specialChar)
        && !mnameInput.match(specialChar)
        && !contactField.match(capletterOnly)
        && !contactField.match(smallLetters)
        ) {
            display.style.backgroundColor = 'green';
            display.style.color = 'white';
            display.textContent = 'Success';
        }


    // User's Name
    else if(fnameInput.match(specialChar)
    && fnameInput.match(numberOnly)
    && lnameInput.match(specialChar)
    && lnameInput.match(numberOnly)
    && mnameInput.match(specialChar)
    && mnameInput.match(numberOnly)) {
        display.style.backgroundColor = 'red';
        display.style.color = 'white';
        display.textContent = 'Please enter a valid name.'
    }

   mainForm.reset();
}

// I'm so tired maybe I'll continue this next time...

/* const checkGender = () => {

    const selectedGender = document.querySelectorAll('[name="gender"]')
    const isGenderChecked = selectedGender.forEach(data => {
        return data.checked
    })
    const filterGender = isGenderChecked.map(data => {
        storedGender.push(data.value);
        return data;
    })


}


const checkMobile = () => {

    if(!contactField.match(capletterOnly)
    && !contactField.match(smallLetters)) {
        tp.push(contactField)
    }
    else {
        display.style.backgroundColor = 'red';
        display.textContent = 'Please enter a valid number!';
    }
}

const checkBday = () => {
    
    let newDate = new Date();
    let year = newDate.toLocaleString([], {year: 'numeric'});
    let month = newDate.toLocaleString([], {month: 'numeric'})
    let day = newDate.toLocaleString([], {day:'numeric'});
    if(birthday > new Date);

    let num = /[10-12]/
    let old = /[1910-1922]/
    let dateCompare = month.match(num) == null ? 
    `0${month}/${day}/${year}` : `${month}/${day}/${year}`

    if (birthday.match(old)
    && birthday >= newDate) {
        display.style.backgroundColor = 'red';
        display.textContent = 'Please enter a valid date.'
    }
} */