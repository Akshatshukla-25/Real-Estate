const users = {
    "akshat@gmail.com": "akshat",
    "user@realestate.com": "user123"
};

function handleLogin(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const errorMsg = document.getElementById('error-message');

    if (users.hasOwnProperty(email)) {
        localStorage.setItem("email", email);
        window.location.href = "password.html";
    } else {
        errorMsg.textContent = "Invalid credentials";
        errorMsg.style.display = 'block';
    }
}

function handlePassword(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-message');

    const email = localStorage.getItem("email");

    if (users[email] === password) {
        window.location.href = 'index.html';
    } else {
        errorMsg.textContent = "Invalid credentials";
        errorMsg.style.display = 'block';
    }
}
