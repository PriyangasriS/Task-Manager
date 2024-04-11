document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (localStorage.getItem(username) === password) {
        alert("Login successful!");
        window.location.replace("index.html");
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
