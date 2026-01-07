// ===== Choccy IDE Website - Premium Interactions =====

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();
    initScrollAnimations();
    initParallaxEffects();
    initMouseGlow();
    initParticleSystem();
    initCardEffects();
    initCursorGlow();
});

// ===== Mobile Menu =====
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuBtn || !navLinks) return;
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
    
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== Header Scroll Effect =====
function initHeaderScroll() {
    const header = document.querySelector('header');
    let lastScroll = 0;
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const currentScroll = window.scrollY;
                
                if (currentScroll > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                
                lastScroll = currentScroll;
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add slight delay for nested elements
                if (entry.target.classList.contains('stagger-children')) {
                    entry.target.querySelectorAll('*').forEach((child, i) => {
                        child.style.animationDelay = `${i * 0.08}s`;
                    });
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in, .stagger-children').forEach(el => {
        observer.observe(el);
    });
    
    // Trigger visible class for elements already in view
    setTimeout(() => {
        document.querySelectorAll('.stagger-children').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }, 100);
}

// ===== Parallax Effects =====
function initParallaxEffects() {
    const phoneMockup = document.querySelector('.phone-mockup');
    const hero = document.querySelector('.hero');
    
    if (!phoneMockup || !hero) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.scrollY;
                const heroHeight = hero.offsetHeight;
                
                if (scrolled < heroHeight) {
                    const progress = scrolled / heroHeight;
                    const translateY = scrolled * 0.15;
                    const rotateY = -12 + (progress * 8);
                    const rotateX = 5 - (progress * 3);
                    
                    phoneMockup.style.transform = `
                        rotateY(${rotateY}deg) 
                        rotateX(${rotateX}deg) 
                        translateY(${translateY}px)
                    `;
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ===== Mouse Glow Effect on Cards =====
function initMouseGlow() {
    const cards = document.querySelectorAll('.feature-card, .lang-card, .requirement-item');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            
            // Add radial gradient glow at mouse position
            card.style.background = `
                radial-gradient(
                    400px circle at ${x}px ${y}px,
                    rgba(210, 105, 30, 0.08),
                    transparent 40%
                ),
                rgba(18, 16, 14, 0.85)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.background = 'rgba(18, 16, 14, 0.85)';
        });
    });
}

// ===== Card 3D Tilt Effect =====
function initCardEffects() {
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                translateY(-12px)
                scale(1.02)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });
}

// ===== Cursor Glow =====
function initCursorGlow() {
    // Only on desktop
    if (window.innerWidth < 1024) return;
    
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateGlow() {
        // Smooth follow
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        
        glow.style.left = `${glowX}px`;
        glow.style.top = `${glowY}px`;
        
        requestAnimationFrame(animateGlow);
    }
    
    animateGlow();
    
    // Hide on scroll for performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        glow.style.opacity = '0';
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            glow.style.opacity = '1';
        }, 150);
    });
}

// ===== Particle System =====
function initParticleSystem() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.prepend(canvas);
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0, mouseY = 0;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticle() {
        const colors = [
            { h: 25, s: 70, l: 55 },   // Chocolate orange
            { h: 330, s: 70, l: 60 },  // Pink
            { h: 210, s: 70, l: 60 },  // Blue
            { h: 270, s: 60, l: 60 },  // Purple
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2.5 + 0.5,
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: (Math.random() - 0.5) * 0.4,
            opacity: Math.random() * 0.4 + 0.1,
            hue: color.h,
            sat: color.s,
            light: color.l,
            pulse: Math.random() * Math.PI * 2
        };
    }
    
    function init() {
        resize();
        particles = [];
        const particleCount = Math.min(100, Math.floor(canvas.width * canvas.height / 12000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle());
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, i) => {
            // Update position
            p.x += p.speedX;
            p.y += p.speedY;
            p.pulse += 0.02;
            
            // Mouse interaction - subtle attraction
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 200) {
                p.x += dx * 0.001;
                p.y += dy * 0.001;
            }
            
            // Wrap around
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            
            // Pulsing opacity
            const pulseOpacity = p.opacity * (0.7 + Math.sin(p.pulse) * 0.3);
            
            // Draw particle with glow
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${p.hue}, ${p.sat}%, ${p.light}%, ${pulseOpacity})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = `hsla(${p.hue}, ${p.sat}%, ${p.light}%, 0.5)`;
            ctx.fill();
            ctx.shadowBlur = 0;
            
            // Draw connections
            particles.slice(i + 1).forEach(p2 => {
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150) {
                    const opacity = 0.15 * (1 - dist / 150);
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    
                    // Gradient line
                    const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
                    gradient.addColorStop(0, `hsla(${p.hue}, ${p.sat}%, ${p.light}%, ${opacity})`);
                    gradient.addColorStop(1, `hsla(${p2.hue}, ${p2.sat}%, ${p2.light}%, ${opacity})`);
                    
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    // Track mouse
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    window.addEventListener('resize', () => {
        resize();
        const targetCount = Math.min(100, Math.floor(canvas.width * canvas.height / 12000));
        while (particles.length < targetCount) particles.push(createParticle());
        while (particles.length > targetCount) particles.pop();
    });
    
    init();
    animate();
}

// ===== Typing Animation for Terminal =====
function initTypingAnimation() {
    const terminalLines = document.querySelectorAll('.terminal-line');
    terminalLines.forEach((line, i) => {
        line.style.animationDelay = `${1.5 + i * 0.5}s`;
    });
}

// Initialize typing animation
initTypingAnimation();


// ===== Button Ripple Effect =====
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ===== Lazy Load Images =====
function initLazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

initLazyLoad();

// ===== Performance: Reduce animations on low-end devices =====
function checkPerformance() {
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduce-motion');
    }
}

checkPerformance();

console.log('🍫 Choccy IDE Website loaded successfully!');
