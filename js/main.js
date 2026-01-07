// ===== Mobile Menu =====
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
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
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // ===== Header Scroll Effect =====
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(5, 5, 5, 0.95)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(5, 5, 5, 0.7)';
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // ===== Scroll Animations =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe fade-in elements
    document.querySelectorAll('.fade-in, .stagger-children').forEach(el => {
        observer.observe(el);
    });
    
    // ===== Parallax Effect on Hero =====
    const hero = document.querySelector('.hero');
    const phoneMockup = document.querySelector('.phone-mockup');
    
    if (hero && phoneMockup) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                phoneMockup.style.transform = `rotateY(-10deg) rotateX(5deg) translateY(${scrolled * 0.1}px)`;
            }
        });
    }
    
    // ===== Mouse Glow Effect =====
    const cards = document.querySelectorAll('.feature-card, .lang-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    
    // ===== Particle Background =====
    createParticles();
});

// ===== Particle System =====
function createParticles() {
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
    let animationId;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.5 + 0.1,
            hue: Math.random() * 60 + 250 // Purple to pink range
        };
    }
    
    function init() {
        resize();
        particles = [];
        const particleCount = Math.min(80, Math.floor(canvas.width * canvas.height / 15000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle());
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, i) => {
            p.x += p.speedX;
            p.y += p.speedY;
            
            // Wrap around
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${p.opacity})`;
            ctx.fill();
            
            // Draw connections
            particles.slice(i + 1).forEach(p2 => {
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `hsla(270, 70%, 60%, ${0.1 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });
        });
        
        animationId = requestAnimationFrame(animate);
    }
    
    window.addEventListener('resize', () => {
        resize();
        // Adjust particle count on resize
        const targetCount = Math.min(80, Math.floor(canvas.width * canvas.height / 15000));
        while (particles.length < targetCount) {
            particles.push(createParticle());
        }
        while (particles.length > targetCount) {
            particles.pop();
        }
    });
    
    init();
    animate();
}

// ===== Typing Effect for Code Preview =====
function typeCode() {
    const codeLines = document.querySelectorAll('.code-line');
    codeLines.forEach((line, index) => {
        line.style.animationDelay = `${0.5 + index * 0.2}s`;
    });
}
