// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
});

// smooth scrolling for internal anchors
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                navToggle.classList.remove('active');
            }
        }
    });
});

// simple typewriter effect for hero tagline
const tagline = document.querySelector('.tagline');
const words = ['Web & App Developer', 'Data Analyst', 'AI Enthusiast'];
let wordIndex = 0;
let charIndex = 0;
let typing = true;

function type() {
    const current = words[wordIndex];
    if (typing) {
        tagline.textContent = current.slice(0, ++charIndex);
        if (charIndex === current.length) {
            typing = false;
            setTimeout(type, 1500);
        } else {
            setTimeout(type, 100);
        }
    } else {
        tagline.textContent = current.slice(0, --charIndex);
        if (charIndex === 0) {
            typing = true;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 300);
        } else {
            setTimeout(type, 50);
        }
    }
}

if (tagline) type();

// reveal sections on scroll
const sections = document.querySelectorAll('.section');
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });
sections.forEach(sec => revealObserver.observe(sec));

// animate counters when in view
const counters = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / 200;
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 1 });

counters.forEach(counter => counterObserver.observe(counter));