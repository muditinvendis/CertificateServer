// document.getElementById('loginForm').addEventListener('submit', function (event) {
//     event.preventDefault(); 

//     var nameEmailPhone = document.getElementById('nameEmailPhone').value;
//     var password = document.getElementById('password').value;

//     var pattern = /^[A-Za-z]+(?:\s[A-Za-z]+)*$|^[\w-]+(\.[\w-]+)*@[A-Za-z\d-]+(\.[A-Za-z\d-]{2,})+|^\d{10}$/;

//     var isValid = true;

//     var nameEmailPhoneError = document.getElementById('nameEmailPhoneError');
//     var passwordError = document.getElementById('passwordError');

//     nameEmailPhoneError.textContent = '';
//     passwordError.textContent = '';

//     if (!nameEmailPhone.match(pattern)) {
//         nameEmailPhoneError.textContent = 'Please enter a valid name, email, or phone number.';
//         isValid = false;
//     }

//     if (password.length < 8) {
//         passwordError.textContent = 'Password must be at least 8 characters long.';
//         isValid = false;
//     }

//     if (isValid) {
//         localStorage.setItem('nameEmailPhone', nameEmailPhone);
//         localStorage.setItem('password', password);

//         window.location.href = 'certificatePage.html';
//     }
// });

// function togglePasswordVisibility(inputFieldId) {
//     var passwordInput = document.getElementById(inputFieldId);
//     var toggleIcon = document.getElementById('eyeIcon');

//     if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//         toggleIcon.classList.remove('fa-eye-slash');
//         toggleIcon.classList.add('fa-eye');
//     } else {
//         passwordInput.type = 'password';
//         toggleIcon.classList.remove('fa-eye');
//         toggleIcon.classList.add('fa-eye-slash');
//     }
// }



// NEW CODE


// document.getElementById('loginForm').addEventListener('submit', function (event) {
//     event.preventDefault(); 

//     var nameEmailPhone = document.getElementById('nameEmailPhone').value;
//     var password = document.getElementById('password').value;

//     var pattern = /^[A-Za-z]+(?:\s[A-Za-z]+)*$|^[\w-]+(\.[\w-]+)*@[A-Za-z\d-]+(\.[A-Za-z\d-]{2,})+|^\d{10}$/;

//     var isValid = true;

//     var nameEmailPhoneError = document.getElementById('nameEmailPhoneError');
//     var passwordError = document.getElementById('passwordError');

//     nameEmailPhoneError.textContent = '';
//     passwordError.textContent = '';

//     if (!nameEmailPhone.match(pattern)) {
//         nameEmailPhoneError.textContent = 'Please enter a valid name, email, or phone number.';
//         isValid = false;
//     }

//     if (password.length < 8) {
//         passwordError.textContent = 'Password must be at least 8 characters long.';
//         isValid = false;
//     }

//     if (isValid) {
//         fetch('/api/signin/', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 nameEmailPhone: nameEmailPhone,
//                 password: password,
//             }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 window.location.href = 'certificatePage.html';
//             } else {
//                 var errorMessageElement = document.getElementById('errorMessage');
//                 errorMessageElement.textContent = data.message;
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     }
// });

// function togglePasswordVisibility(inputFieldId) {
//     var passwordInput = document.getElementById(inputFieldId);
//     var toggleIcon = document.getElementById('eyeIcon');

//     if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//         toggleIcon.classList.remove('fa-eye-slash');
//         toggleIcon.classList.add('fa-eye');
//     } else {
//         passwordInput.type = 'password';
//         toggleIcon.classList.remove('fa-eye');
//         toggleIcon.classList.add('fa-eye-slash');
//     }
// }


// ONE MORE CODE

document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Validate form inputs
    var nameEmailPhone = document.getElementById('nameEmailPhone').value;
    var password = document.getElementById('password').value;

    // Regular expression pattern
    var pattern = /^[A-Za-z]+(?:\s[A-Za-z]+)*$|^[\w-]+(\.[\w-]+)*@[A-Za-z\d-]+(\.[A-Za-z\d-]{2,})+|^\d{10}$/;

    // Perform validation
    var isValid = true;

    var nameEmailPhoneError = document.getElementById('nameEmailPhoneError');
    var passwordError = document.getElementById('passwordError');
    var responseMessage = document.getElementById('responseMessage');

    // Reset previous error messages
    nameEmailPhoneError.textContent = '';
    passwordError.textContent = '';
    responseMessage.textContent = '';

    if (!nameEmailPhone.match(pattern)) {
        nameEmailPhoneError.textContent = 'Please enter a valid name, email, or phone number.';
        isValid = false;
    }

    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    if (isValid) {
        try {
            // Send POST request to the server's signin API
            const response = await fetch('http://192.168.1.126:8000/api/signin/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: nameEmailPhone,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {
                responseMessage.textContent = 'Sign in successful!';
                setTimeout(function () {
                    window.location.href = 'certificatePage.html';
                }, 3000);
            } else {
                responseMessage.textContent = 'Sign in failed. Please check your credentials.';
            }
        } catch (error) {
            responseMessage.textContent = 'An error occurred. Please try again later.';
        }
    }
});

function togglePasswordVisibility(inputFieldId) {
    var passwordInput = document.getElementById(inputFieldId);
    var toggleIcon = document.getElementById('eyeIcon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}
