// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const bodyElement = document.body;

// Load stored theme preference
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    bodyElement.classList.add(storedTheme);
    themeToggle.innerHTML = storedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = bodyElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Remove the current theme class and add the new theme
    bodyElement.classList.remove(currentTheme);
    bodyElement.classList.add(newTheme);

    // Save the new theme to localStorage
    localStorage.setItem('theme', newTheme);

    // Update the icon based on the theme
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});
