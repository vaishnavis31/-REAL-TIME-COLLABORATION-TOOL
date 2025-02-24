function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Register Response:", data); // Debugging

        if (data.success) {
            alert('Registration successful! Redirecting to login...');
            window.location.href = 'login.html'; // Redirect to Login Page
        } else {
            alert('Registration failed: ' + (data.message || "Unknown error"));
        }
    })
    .catch(error => {
        console.error('Register Error:', error);
        alert('An error occurred. Please try again.');
    });
}
