// app.js
document.addEventListener('DOMContentLoaded', function () {
    // Get the input element
    const usernameInput = document.getElementById('username');

    // Force lowercase while typing
    usernameInput.addEventListener('input', function () {
        this.value = this.value.toLowerCase();
    });

    // Form submission handler
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Get the username from the input field (already lowercase from input event)
        const username = document.getElementById('username').value;

        // Define a role-based redirection logic with proper paths
        const userRoles = {
            'admin': './PageElement/admin.html',
            'gem': './PageElement/gem.html',
            'viewer': './PageElement/viewer.html'
        };

        // Determine role based on the username entered
        const role = userRoles[username] || './PageElement/404.html'; // Fixed 404 path

        // Use window.location.href for navigation
        window.location.href = role;
    });
});