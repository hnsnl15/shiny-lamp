const loginForm = document.getElementById('login-auth')

const checkKeyValue = () =>{
    const loginPassword = document.getElementById('login-password-input').value;
    const usernameAuth = document.getElementById('username-input').value;

    let storedLocalInputs = localStorage.getItem('User Data');
    let parsedInput = JSON.parse(storedLocalInputs);
    // Declareed variables to check if user is in the data
    let validatedUsername = [];
    let validatedPassword = [];
    let mapParsedInput = parsedInput.map(contents => {
        validatedUsername.push(contents.username)
        validatedPassword.push(contents.registered_pass)
    })
     // Validating input usernamae and password if it is in the data
    if (validatedUsername.includes(usernameAuth)
    && validatedPassword.includes(loginPassword)) {
        // I just realized that I can use this method to change form action..
        loginForm.action = './redirect.html'
    }
    else if (validatedUsername.includes(usernameAuth)
    && !validatedPassword.includes(loginPassword)) {
        alert('Password incorrect.')
    }
    else if (!validatedUsername.includes(usernameAuth)
    && validatedPassword.includes(loginPassword)) {
        alert('Username not found.')
    } 
    else {
        alert('Please enter a valid input!')
    }

    loginForm.reset();
}

loginBtn.addEventListener('click', checkKeyValue)