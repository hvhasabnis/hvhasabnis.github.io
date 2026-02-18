// ========================================
// DIGITAL PORTFOLIO - SCRIPT.JS
// Interactive Features
// ========================================

// ========================================
// NAVIGATION
// ========================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section, .hero');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========================================
// SMOOTH SCROLLING
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// PUBLICATION ABSTRACT TOGGLE
// ========================================

function toggleAbstract(id) {
    const abstract = document.getElementById(id);
    if (abstract.style.display === 'none' || abstract.style.display === '') {
        abstract.style.display = 'block';
    } else {
        abstract.style.display = 'none';
    }
}

// ========================================
// FADE-IN ANIMATION ON SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll('.project-card, .publication-card, .timeline-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// TYPING EFFECT (Optional Enhancement)
// ========================================

const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing effect after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// ========================================
// CURSOR TRAIL EFFECT (Optional)
// ========================================

document.addEventListener('mousemove', (e) => {
    // Create subtle glow effect following cursor
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.left = e.pageX + 'px';
    glow.style.top = e.pageY + 'px';
    document.body.appendChild(glow);

    setTimeout(() => {
        glow.remove();
    }, 1000);
});

// Add cursor glow CSS dynamically
const style = document.createElement('style');
style.textContent = `
  .cursor-glow {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 240, 255, 0.3) 0%, transparent 70%);
    pointer-events: none;
    animation: fadeOut 1s ease-out forwards;
    z-index: 9999;
  }
  
  @keyframes fadeOut {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;
document.head.appendChild(style);

// ========================================
// CONSOLE MESSAGE (Fun Easter Egg)
// ========================================

console.log('%c👋 Hello Developer!', 'color: #00f0ff; font-size: 24px; font-weight: bold;');
console.log('%cInterested in the code? Check out the repo!', 'color: #9ca3af; font-size: 14px;');
console.log('%chttps://github.com/hvhasabnis', 'color: #00f0ff; font-size: 14px;');

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========================================
// ANALYTICS (Optional - Add your tracking ID)
// ========================================

// Google Analytics
/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR-GA-ID');
*/