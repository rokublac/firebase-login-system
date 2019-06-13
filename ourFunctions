// register email and password to firebase
export function registerUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(cred => {
            console.log("User successfully created!");
            // clear inputs
            document.getElementById('login').value = '';
            document.getElementById('password').value = '';
        }).catch(err => {
            console.log(err.message);
        })
}

// log into app
export function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('Successfully authenticated!');
            // direct to logic success page
            window.location.href = '../html/loggedIn.html';
        }).catch(err => {
            console.log(err.message);
        })
}

// simple error check to see if inputs are empty
export function checkIfInputEmpty(userInput, passInput) {
    if (userInput.length === 0 || passInput.length === 0) {
        return true
    } else {
        return false
    }
}
