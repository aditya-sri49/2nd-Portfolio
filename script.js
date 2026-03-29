// Preloader
window.addEventListener('load', () => {
    setTimeout(() => document.querySelector('.preloader').classList.add('hidden'), 2000);
});

// Navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 50 
        ? 'rgba(15, 20, 25, 0.98)' 
        : 'rgba(15, 20, 25, 0.95)';
});

// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({
            behavior: 'smooth', block: 'start'
        });
    });
});

// Navbar active link
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section[id]').forEach(section => {
        if (window.scrollY >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease';
    observer.observe(section);
});

// YOUR EDUCATION CARDS
document.querySelectorAll('.edu-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.edu-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

// Contact Form
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;
    
    setTimeout(() => {
        alert('✅ Message sent successfully! I\'ll respond within 24 hours.');
        e.target.reset();
        btn.innerHTML = original;
        btn.disabled = false;
    }, 2000);
});

// Parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg-animation');
    if (heroBg) heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
});

// Cursor hover effects
document.querySelectorAll('.glass-card, .skill-ball').forEach(el => {
    el.addEventListener('mouseenter', () => el.style.transform = 'translateY(-8px)');
    el.addEventListener('mouseleave', () => el.style.transform = 'translateY(0)');
});