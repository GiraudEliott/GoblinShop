// theme.js

// Function to toggle the theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    // Store the theme preference in localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// On page load, retrieve the theme preference and apply it
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
