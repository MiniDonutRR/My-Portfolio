document.addEventListener('DOMContentLoaded', function () {
    const nightModeToggle = document.getElementById('nightModeToggle');
    const body = document.body;
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const hamburgerNav = document.getElementById('hamburger-nav');
    const menuLinks = document.querySelectorAll('.menu-links a');
    
    
    nightModeToggle.addEventListener('change', function () {
        if (this.checked) {
            body.classList.add('night-mode');
            navbar.classList.add('night-mode');
            navLinks.forEach(link => link.classList.add('night-mode'));
        } else {
            body.classList.remove('night-mode');
            navbar.classList.remove('night-mode');
            navLinks.forEach(link => link.classList.remove('night-mode'));
        }
        
    });
});
nightModeToggle.addEventListener('change', function () {
    if (this.checked) {
        body.classList.add('night-mode');
        hamburgerNav.classList.add('night-mode');
        menuLinks.forEach(link => link.classList.add('night-mode'));
    } else {
        body.classList.remove('night-mode');
        hamburgerNav.classList.remove('night-mode');
        menuLinks.forEach(link => link.classList.remove('night-mode'));
    }
    
});
