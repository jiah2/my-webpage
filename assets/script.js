document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');

    navToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    const links = navbar.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

let lastScrollTop = 0;
const navbar = document.querySelector('header');
let isNavClicked = false;

const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        isNavClicked = true;
        setTimeout(() => isNavClicked = false, 1000);
    });
});

window.addEventListener('scroll', function() {
    if (isNavClicked) return; 

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
       
        navbar.classList.add('hidden');
    } else {
       
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});
