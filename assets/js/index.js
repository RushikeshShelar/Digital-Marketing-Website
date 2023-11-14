const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 10)
        } else {
            counter.innerText = target
        }
    }

    updateCounter();
})
// Toggle Menu icon
const menu = document.querySelector('.menu');
const nav = document.querySelector('.navbar');
// Toggle navbar
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
});

// Scroll Sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        }
    });

    menu.classList.remove('active');
    nav.classList.remove('active');

};