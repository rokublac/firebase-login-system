let firebaseConfig = {
// firebase config
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// use firebase's signout method.
let logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', function(e) {
    firebase.auth().signOut().then(() => {
        console.log('Logging out...');
        // direct to main login/resgistration page
        window.location.href = './index.html';
    }).catch(err => {
        console.log(err);
    })
});
