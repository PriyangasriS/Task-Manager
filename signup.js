document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose another username.");
        return;
    }
    localStorage.setItem(username, password);
    window.location.replace("login.html");
});
