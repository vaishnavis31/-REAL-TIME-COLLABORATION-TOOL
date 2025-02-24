function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Login Response:", data); // Debugging

        if (data.token) {
            // Store token and user info
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('userId', data.userId);

            alert('Login successful! Redirecting to dashboard...');
            window.location.href = 'dashboard.html'; // Redirect to Dashboard
        } else {
            alert('Login failed: ' + (data.message || "Unknown error"));
        }
    })
    .catch(error => {
        console.error('Login Error:', error);
        alert('An error occurred. Please try again.');
    });
}
