// ===== Choccy IDE Website =====

// i18n translations
const translations = {
    en: {
        'nav.orbit': 'Orbit AI',
        'nav.features': 'Features',
        'nav.languages': 'Languages',
        'nav.download': 'Download',
        'hero.badge': 'Now with AI Agent - Android & Windows',
        'hero.title1': 'Code Anywhere.',
        'hero.title2': 'Build Anything.',
        'hero.desc': 'A powerful code editor with AI Agent for Android and Windows. Built-in Linux environment, debugger, LSP support, and Orbit AI autonomous coding agent.',
        'hero.download': 'Download Now',
        'hero.github': 'View on GitHub',
        'hero.version': 'Version',
        'hero.platforms': 'Platforms',
        'hero.aiagent': 'AI Agent',
        'orbit.tag': 'AI AGENT',
        'orbit.title': 'Meet Orbit AI - Your Autonomous Coding Partner',
        'orbit.desc': 'From idea to implementation, Orbit AI handles the entire development workflow autonomously',
        'orbit.design.title': 'Autonomous Design',
        'orbit.design.desc': 'Orbit analyzes your requirements and generates complete design documents - PRD, architecture, module design, all automatically.',
        'orbit.plan.title': 'Smart Task Planning',
        'orbit.plan.desc': 'Breaks down complex features into executable tasks with dependencies, risk assessment, and checkpoints.',
        'orbit.execute.title': 'Automated Execution',
        'orbit.execute.desc': 'Executes tasks one by one, reads design docs, writes code, runs checkpoints, and auto-fixes errors.',
        'orbit.control.title': 'You Stay in Control',
        'orbit.control.desc': 'Review and approve each phase. Rollback any changes with one click. Full transparency and control.',
        'orbit.modes.title': 'Three Modes for Every Need',
        'orbit.modes.mini.title': 'Quick Assistance',
        'orbit.modes.mini.desc': 'Fast answers and simple code edits',
        'orbit.modes.miniplus.title': 'Enhanced Tools',
        'orbit.modes.miniplus.desc': 'File operations and command execution',
        'orbit.modes.full.title': 'Autonomous Agent',
        'orbit.modes.full.desc': 'Complete design-to-execution workflow',
        'features.tag': 'FEATURES',
        'features.title': 'Everything you need to code',
        'features.desc': 'Professional development tools for desktop and mobile',
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
        'download.title': 'Ready to code with AI?',
        'download.desc': 'Download Choccy IDE with Orbit AI Agent and start building today.',
        'download.windows.title': 'Windows Desktop',
        'download.windows.desc': 'Full-featured desktop experience with Orbit AI',
        'download.windows.button': 'Download for Windows',
        'download.android.title': 'Android',
        'download.android.desc': 'Code on the go with built-in Linux environment',
        'download.android.button': 'Download APK',
        'download.android.version': 'Android 8+',
        'download.android.warning': '⚠️ Not compatible with Android 11',
        'download.recommended': 'Recommended',
        'download.version': 'Version',
        'download.license': 'License'
    },
    zh: {
        'nav.orbit': 'Orbit AI',
        'nav.features': '功能',
        'nav.languages': '语言',
        'nav.download': '下载',
        'hero.badge': '全新 AI Agent - 支持 Android 和 Windows',
        'hero.title1': '随时随地编程',
        'hero.title2': '创造无限可能',
        'hero.desc': '强大的代码编辑器，搭载 AI Agent，支持 Android 和 Windows。内置 Linux 环境、调试器、LSP 支持和 Orbit AI 自主编程智能体。',
        'hero.download': '立即下载',
        'hero.github': '查看 GitHub',
        'hero.version': '版本',
        'hero.platforms': '平台',
        'hero.aiagent': 'AI Agent',
        'orbit.tag': 'AI 智能体',
        'orbit.title': '认识 Orbit AI - 你的自主编程伙伴',
        'orbit.desc': '从想法到实现，Orbit AI 自主处理整个开发工作流',
        'orbit.design.title': '自主设计',
        'orbit.design.desc': 'Orbit 分析你的需求，自动生成完整的设计文档 - PRD、架构设计、模块设计，全部自动完成。',
        'orbit.plan.title': '智能任务规划',
        'orbit.plan.desc': '将复杂功能分解为可执行的任务，包含依赖关系、风险评估和检查点。',
        'orbit.execute.title': '自动化执行',
        'orbit.execute.desc': '逐个执行任务，读取设计文档，编写代码，运行检查点，自动修复错误。',
        'orbit.control.title': '你掌控全局',
        'orbit.control.desc': '审查并批准每个阶段。一键回滚任何更改。完全透明，完全掌控。',
        'orbit.modes.title': '三种模式满足不同需求',
        'orbit.modes.mini.title': '快速助手',
        'orbit.modes.mini.desc': '快速回答和简单代码编辑',
        'orbit.modes.miniplus.title': '增强工具',
        'orbit.modes.miniplus.desc': '文件操作和命令执行',
        'orbit.modes.full.title': '自主智能体',
        'orbit.modes.full.desc': '完整的设计到执行工作流',
        'features.tag': '核心功能',
        'features.title': '编程所需的一切',
        'features.desc': '专业的桌面和移动端开发工具',
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
        'download.title': '准备好用 AI 编程了吗？',
        'download.desc': '下载搭载 Orbit AI Agent 的 Choccy IDE，开始你的创作之旅。',
        'download.windows.title': 'Windows 桌面版',
        'download.windows.desc': '完整的桌面体验，搭载 Orbit AI',
        'download.windows.button': '下载 Windows 版',
        'download.android.title': 'Android 版',
        'download.android.desc': '随时随地编程，内置 Linux 环境',
        'download.android.button': '下载 APK',
        'download.android.version': 'Android 8+',
        'download.android.warning': '⚠️ 不兼容 Android 11',
        'download.recommended': '推荐',
        'download.version': '版本',
        'download.license': '许可证'
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
