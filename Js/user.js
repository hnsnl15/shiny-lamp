// Some global variables
const btnRegister = document.getElementById('register-btn');
const registerForm = document.getElementById('registration-form-1')
const loginBtn = document.getElementById('login-btn');


// Function to store data to local storage
const storeInputValue = () => {
    // Declared Variables
    const usernameData = document.getElementById('username-input').value;
    const fnameData = document.getElementById('fname-input').value;
    const mnameData = document.getElementById('mname-input').value;
    const snameData = document.getElementById('surname-input').value;
    const regPassData = document.getElementById('registration-password-input').value;
    const repPassData = document.getElementById('repeat-password-input').value;
    
    // Stored Data
    let filterStoredData = [];
    // filterStoredData will store filter storedData into JSON stringify / Local storage
    // storedData will store all the data from the variable userData to parsed elements
    let storedData = localStorage.getItem('User Data') ?
    JSON.parse(localStorage.getItem('User Data')) : [];
    // User Data object
    let userData = 
    {
        username: usernameData,
        first_name: fnameData,
        middle_name: mnameData,
        surname: snameData,
        registered_pass: regPassData,
        repeated_pass: repPassData
    }
    // userData will be pushed to storedData
    storedData.push(userData);
    const specialChar = /[^a-zA-Z0-9\-\/]/;
    const numberOnly = /[0-9]/;

    // This function will filter all the value from storedData. 
    const filterData = () => storedData.forEach(data => {
        // storedUserName gets the username from local storage and compares it to user's entered input username, if username is already detected, it will not save so.. username is UNIQUE!!
        let storedUsername = [];
        let isAlreadyStored = filterStoredData.map(datas => {storedUsername.push(datas.username)});

        // A bunch of if statements coming...
        if(
            data.username.match(specialChar) === null
            && data.first_name.match(specialChar) === null
            && data.middle_name.match(specialChar) === null
            && data.surname.match(specialChar) === null
            && data.middle_name.match(numberOnly) === null
            && isNaN(data.first_name)
            && isNaN(data.surname)
            && data.username.length >= 3
            && data.first_name.length >= 3
            && data.surname.length >= 3
            && data.registered_pass == data.repeated_pass
            && data.registered_pass.length >= 6
            && data.repeated_pass.length >= 6
            && !storedUsername.includes(data.username)
            ) {
                filterStoredData.push(data);
                registerForm.action = './success.html'
            }
            else {  
                alert('Invalid data. Please try again!');
                registerForm.action = '#'
            }
           
             
            if (data.username.match(specialChar) !== null) {
                alert('Please enter a valid username!')
            }
            if (data.first_name.match(specialChar) !== null) {
                alert('Please enter a valid name!')
            }
            if (data.middle_name.match(specialChar) !== null
                || data.middle_name.match(numberOnly) !== null
                ) {
                alert('Please enter a valid middle name!')
            }
            if (data.surname.match(specialChar) !== null) {
                alert('Please enter a valid surname!')
            }
            if (data.registered_pass != data.repeated_pass) {
                    alert('Please make sure password is matched!')
                }
            if (
             data.username.length < 3
            && data.first_name.length < 3
            && data.surname.length < 3
            ) {
                alert('Please enter a valid amount of characters!')
            }
            if (
                data.registered_pass.length < 6
                && data.repeated_pass.length < 6
            ) {
                alert('Please enter a right amount of password!')
            }
            if (storedUsername.includes(data.username)) {
                alert('Username is already used.')
            }
        })
    
    filterData();

        registerForm.reset();
        localStorage.setItem('User Data', JSON.stringify(filterStoredData));
    }
    
    //console.log(filterStoredData)
    const success = () => {
        alert('Success')
    }

    registerForm.addEventListener('submit', storeInputValue);  