// ===== Choccy IDE Website =====

// i18n translations
const translations = {
    en: {
        'nav.features': 'Features',
        'nav.languages': 'Languages',
        'nav.download': 'Download',
        'hero.badge': 'Now available for Android',
        'hero.title1': 'Code anywhere.',
        'hero.title2': 'Build anything.',
        'hero.desc': 'A powerful mobile IDE with built-in Linux environment. Write, compile, and debug code directly on your phone.',
        'hero.download': 'Download APK',
        'hero.github': 'View on GitHub',
        'hero.version': 'Version',
        'hero.size': 'Size',
        'hero.requires': 'Requires',
        'features.tag': 'FEATURES',
        'features.title': 'Everything you need to code on mobile',
        'features.desc': 'Professional development tools optimized for touch screens',
        'features.editor.title': 'Smart Editor',
        'features.editor.desc': 'Syntax highlighting, auto-completion, multi-cursor editing, and code folding.',
        'features.linux.title': 'Linux Environment',
        'features.linux.desc': 'Built-in proot Ubuntu with GCC, Python, Node.js, and more toolchains.',
        'features.debug.title': 'Debugger',
        'features.debug.desc': 'GDB for C/C++, debugpy for Python. Set breakpoints and inspect variables.',
        'features.lsp.title': 'LSP Support',
        'features.lsp.desc': 'Language Server Protocol for intelligent completions and go-to-definition.',
        'features.terminal.title': 'Integrated Terminal',
        'features.terminal.desc': 'Full-featured terminal emulator with multi-tab support.',
        'features.project.title': 'Project Manager',
        'features.project.desc': 'File browser, CMake support, and project templates.',
        'languages.tag': 'LANGUAGES',
        'languages.title': '10+ Languages Supported',
        'languages.desc': 'From systems programming to web development',
        'download.title': 'Ready to code on the go?',
        'download.desc': 'Download Choccy IDE and start building today.',
        'download.button': 'Download for Android',
        'download.version': 'Version',
        'download.size': 'Size',
        'download.requires': 'Requires'
    },
    zh: {
        'nav.features': '功能',
        'nav.languages': '语言',
        'nav.download': '下载',
        'hero.badge': '现已支持 Android',
        'hero.title1': '随时随地编程',
        'hero.title2': '创造无限可能',
        'hero.desc': '功能强大的移动端 IDE，内置完整 Linux 环境。在手机上编写、编译、调试代码。',
        'hero.download': '下载 APK',
        'hero.github': '查看 GitHub',
        'hero.version': '版本',
        'hero.size': '大小',
        'hero.requires': '系统要求',
        'features.tag': '核心功能',
        'features.title': '移动端编程所需的一切',
        'features.desc': '为触屏优化的专业开发工具',
        'features.editor.title': '智能编辑器',
        'features.editor.desc': '语法高亮、代码补全、多光标编辑、代码折叠。',
        'features.linux.title': 'Linux 环境',
        'features.linux.desc': '内置 proot Ubuntu，支持 GCC、Python、Node.js 等工具链。',
        'features.debug.title': '调试器',
        'features.debug.desc': 'GDB 调试 C/C++，debugpy 调试 Python。设置断点、查看变量。',
        'features.lsp.title': 'LSP 支持',
        'features.lsp.desc': '语言服务器协议，智能补全、跳转定义。',
        'features.terminal.title': '集成终端',
        'features.terminal.desc': '功能完整的终端模拟器，支持多标签页。',
        'features.project.title': '项目管理',
        'features.project.desc': '文件浏览器、CMake 支持、项目模板。',
        'languages.tag': '支持语言',
        'languages.title': '支持 10+ 编程语言',
        'languages.desc': '从系统编程到 Web 开发',
        'download.title': '准备好随时编程了吗？',
        'download.desc': '下载 Choccy IDE，开始你的创作之旅。',
        'download.button': '下载 Android 版',
        'download.version': '版本',
        'download.size': '大小',
        'download.requires': '系统要求'
    }
};


let currentLang = localStorage.getItem('lang') || 'en';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initParticles();
    initCursorGlow();
    initSmoothScroll();
    initHeaderScroll();
    initScrollAnimations();
    initTiltEffect();
});

// ===== Language Switch =====
function initLanguage() {
    setLanguage(currentLang);
    
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'zh' : 'en';
            setLanguage(currentLang);
            localStorage.setItem('lang', currentLang);
        });
    }
}

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    const langCurrent = document.querySelector('.lang-current');
    if (langCurrent) {
        langCurrent.textContent = lang.toUpperCase();
    }
}

// ===== Particles =====
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: 0, y: 0 };
    
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
            opacity: Math.random() * 0.5 + 0.2
        };
    }
    
    function init() {
        resize();
        particles = [];
        const count = Math.min(80, Math.floor(canvas.width * canvas.height / 15000));
        for (let i = 0; i < count; i++) {
            particles.push(createParticle());
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((p, i) => {
            p.x += p.speedX;
            p.y += p.speedY;
            
            // Mouse interaction
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                p.x -= dx * 0.01;
                p.y -= dy * 0.01;
            }
            
            // Wrap
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
            
            // Draw
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(249, 115, 22, ${p.opacity})`;
            ctx.fill();
            
            // Connect nearby particles
            particles.slice(i + 1).forEach(p2 => {
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(249, 115, 22, ${0.1 * (1 - dist / 120)})`;
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    document.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    
    window.addEventListener('resize', init);
    init();
    animate();
}


// ===== Cursor Glow =====
function initCursorGlow() {
    if (window.innerWidth < 1024) return;
    
    const glow = document.querySelector('.cursor-glow');
    if (!glow) return;
    
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    
    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        glow.style.left = glowX + 'px';
        glow.style.top = glowY + 'px';
        requestAnimationFrame(animate);
    }
    
    animate();
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
}

// ===== Header Scroll =====
function initHeaderScroll() {
    const header = document.querySelector('header');
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                header.style.background = window.scrollY > 50 
                    ? 'rgba(5, 5, 5, 0.95)' 
                    : 'rgba(5, 5, 5, 0.8)';
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ===== Scroll Animations =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, i * 100);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('.feature-card, .lang-node').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== Tilt Effect =====
function initTiltEffect() {
    if (window.innerWidth < 1024) return;
    
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${-rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

console.log('🍫 Choccy IDE');


// ===== Typewriter Effect =====
function initTypewriter() {
    const codeLines = [
        { ln: '1', code: '<span class="kw">#include</span> <span class="str">&lt;iostream&gt;</span>' },
        { ln: '2', code: '<span class="kw">#include</span> <span class="str">&lt;vector&gt;</span>' },
        { ln: '3', code: '' },
        { ln: '4', code: '<span class="kw">int</span> <span class="fn">main</span>() {' },
        { ln: '5', code: '    <span class="type">std::vector</span>&lt;<span class="kw">int</span>&gt; nums = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>};' },
        { ln: '6', code: '' },
        { ln: '7', code: '    <span class="kw">for</span> (<span class="kw">auto</span> n : nums) {' },
        { ln: '8', code: '        <span class="type">std::cout</span> <span class="op">&lt;&lt;</span> n <span class="op">&lt;&lt;</span> <span class="str">" "</span>;' },
        { ln: '9', code: '    }' },
        { ln: '10', code: '' },
        { ln: '11', code: '    <span class="kw">return</span> <span class="num">0</span>;' },
        { ln: '12', code: '}' }
    ];
    
    const terminalLines = [
        { type: 'cmd', text: 'g++ main.cpp -o main' },
        { type: 'cmd', text: './main' },
        { type: 'output', text: '1 2 3 4 5' },
        { type: 'prompt', text: '' }
    ];
    
    const codeEditor = document.getElementById('codeEditor');
    const terminal = document.getElementById('terminalContent');
    if (!codeEditor || !terminal) return;
    
    const codeEl = codeEditor.querySelector('code');
    let currentLine = 0;
    let currentChar = 0;
    let isTypingCode = true;
    let terminalLine = 0;
    let hasStarted = false;
    
    function getPlainText(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }
    
    function typeCode() {
        if (currentLine >= codeLines.length) {
            isTypingCode = false;
            setTimeout(typeTerminal, 500);
            return;
        }
        
        const line = codeLines[currentLine];
        const plainText = getPlainText(line.code);
        
        if (currentChar === 0) {
            const lineEl = document.createElement('span');
            lineEl.className = 'line';
            lineEl.innerHTML = `<span class="ln">${line.ln}</span>`;
            codeEl.appendChild(lineEl);
        }
        
        const lineEl = codeEl.lastElementChild;
        
        if (currentChar < plainText.length) {
            // Build partial HTML
            let charCount = 0;
            let partialHtml = '';
            const fullHtml = line.code;
            let i = 0;
            
            while (charCount <= currentChar && i < fullHtml.length) {
                if (fullHtml[i] === '<') {
                    const closeIdx = fullHtml.indexOf('>', i);
                    partialHtml += fullHtml.substring(i, closeIdx + 1);
                    i = closeIdx + 1;
                } else {
                    partialHtml += fullHtml[i];
                    charCount++;
                    i++;
                }
            }
            
            // Close any open tags
            const openTags = partialHtml.match(/<span[^>]*>/g) || [];
            const closeTags = partialHtml.match(/<\/span>/g) || [];
            const unclosed = openTags.length - closeTags.length;
            for (let j = 0; j < unclosed; j++) {
                partialHtml += '</span>';
            }
            
            lineEl.innerHTML = `<span class="ln">${line.ln}</span>${partialHtml}<span class="typing-cursor"></span>`;
            currentChar++;
            setTimeout(typeCode, 25 + Math.random() * 25);
        } else {
            lineEl.innerHTML = `<span class="ln">${line.ln}</span>${line.code}`;
            currentLine++;
            currentChar = 0;
            setTimeout(typeCode, 100);
        }
    }
    
    function typeTerminal() {
        if (terminalLine >= terminalLines.length) {
            // Add blinking cursor at end
            const lastLine = terminal.lastElementChild;
            if (lastLine) {
                lastLine.innerHTML += '<span class="cursor">_</span>';
            }
            return;
        }
        
        const line = terminalLines[terminalLine];
        const lineEl = document.createElement('div');
        lineEl.className = 'term-line' + (line.type === 'output' ? ' output' : '');
        
        if (line.type === 'cmd') {
            lineEl.innerHTML = '<span class="prompt">$</span> ';
            terminal.appendChild(lineEl);
            typeTerminalText(lineEl, line.text, 0);
        } else if (line.type === 'output') {
            lineEl.textContent = line.text;
            terminal.appendChild(lineEl);
            terminalLine++;
            setTimeout(typeTerminal, 300);
        } else {
            lineEl.innerHTML = '<span class="prompt">$</span> ';
            terminal.appendChild(lineEl);
            terminalLine++;
            setTimeout(typeTerminal, 100);
        }
    }
    
    function typeTerminalText(el, text, idx) {
        if (idx < text.length) {
            el.innerHTML = '<span class="prompt">$</span> ' + text.substring(0, idx + 1) + '<span class="cursor">_</span>';
            setTimeout(() => typeTerminalText(el, text, idx + 1), 30 + Math.random() * 30);
        } else {
            el.innerHTML = '<span class="prompt">$</span> ' + text;
            terminalLine++;
            setTimeout(typeTerminal, 500);
        }
    }
    
    // Start when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasStarted) {
                hasStarted = true;
                setTimeout(typeCode, 500);
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(codeEditor);
}

// Add to init
document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();
});
