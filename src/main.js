// HAMBURGER MENU
const btnNav = document.getElementById('menu')
const navBarNav = document.getElementById('navBar')

btnNav.addEventListener('click', () => {
    navBarNav.classList.toggle('active-nav')
})
// Click Di Luar Button
document.addEventListener('click', (e) => {
    if (!btnNav.contains(e.target) && !navBarNav.contains(e.target)) 
        navBarNav.classList.remove('active-nav')
})

// DARK MODE
const toggleIcons = document.querySelectorAll('.toggle-icon')
const toggle = document.getElementById('dark-mode-toggle')
const icons = document.querySelectorAll('.icon')

// Mengganti icon saat di click
toggleIcons.forEach( () => {
    toggle.addEventListener('click', () => {
        icons.forEach(icon => {
            icon.classList.toggle('bxs-moon');          
            // Dark Mode
            document.body.classList.toggle('dark-mode')
        });
    });
});


// NAVBAR-ACTIVE
let sections = document.querySelectorAll('section');
let nav = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            nav.forEach(el => {
                el.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']')
                .classList.add('active')
            });
        };    
    });
};


// SCROLL WINDOW
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .galeri, .services-container, .portfolio-box, .contact form, .aku, .maps', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});


// TYPE-IT-TEXT
const typed = new Typed('#typeIt', {
    strings: ['Frontend Developer', 'Selebewwww', 'Cuakss Pake Zzz'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
});