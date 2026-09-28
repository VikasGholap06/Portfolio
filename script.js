/**
 * ==========================================================================
 * VIKAS GHOLAP — PORTFOLIO INTERACTION CONTROLLER
 * High-Performance, Accessible, Zero Bloat Vanilla JavaScript
 * ==========================================================================
 */

// --- PROJECT DEEP DIVE DATA REPOSITORY ---
const PROJECTS_DATA = {
    agewell: {
        title: "AGEWELL — Elder Care Application",
        badge: "🏆 1st Place Winner — National Level Project Competition",
        category: "Android Systems · Healthcare · Cloud Infrastructure",
        image: "agewell.png",
        summary: "An award-winning elder health monitoring and emergency dispatch Android ecosystem developed with Kotlin and Java under MVVM architecture, ensuring high-reliability medical tracking and instant emergency alerting.",
        problem: "Elderly seniors living independently face heightened risks during unexpected medical emergencies, struggle to adhere to complex medication schedules, and experience friction finding nearby specialized geriatric medical services quickly.",
        solution: "Built a native Android solution with single-tap emergency SOS broadcasting via Firebase Cloud Messaging (FCM), automated local alarm-triggered medication schedules with adherence logging, and integrated OpenStreetMap API for low-latency live geolocation routing to hospitals.",
        architecture: "Engineered with MVVM (Model-View-ViewModel) architecture. Local persistence is managed via Room DB with Coroutines for asynchronous, non-blocking UI transactions. Background services handle medication reminders, while FCM coordinates cloud push notifications between seniors and registered emergency caregivers.",
        challenges: [
            "Making SOS alerts and medication reminders easy for older adults to use.",
            "Connecting hospital locations with real-time map data.",
            "Keeping application data and notifications in sync through Firebase."
        ],
        technologies: ["Kotlin", "Java", "MVVM", "Firebase Firestore", "FCM Push Notifications", "OpenStreetMap API", "Room DB", "Coroutines"],
        github: "https://github.com/VikasGholap06/AgeWell"
    },

    cityflux: {
        title: "CITY-FLUX — Smart Traffic & Parking Management",
        badge: "🚦 Real-World Distributed Mobility System",
        category: "Data Science · Computer Vision · Smart Mobility",
        image: "cityflux.png",
        summary: "A smart traffic and parking management system that uses YOLO-based vehicle detection and OpenCV image processing to produce structured vehicle counts and parking occupancy data.",
        problem: "Traffic and parking teams need timely, structured information to monitor vehicle flow, spot occupancy, and respond to incidents.",
        solution: "Applied YOLO vehicle detection and OpenCV image processing to generate vehicle-count and parking-occupancy data. Added incident reporting, automated police assignment, and Firebase-backed dashboards for live monitoring.",
        architecture: "The project combines a Python computer-vision workflow with a Firebase-backed application for monitoring, incident reports, and police assignment.",
        challenges: [
            "Turning vehicle detections into useful counts and parking-occupancy data.",
            "Connecting traffic monitoring with incident reporting and police assignment.",
            "Presenting updates in a live Firebase-backed dashboard."
        ],
        technologies: ["Python", "YOLO", "OpenCV", "Firebase", "Java", "Kotlin"],
        github: "https://github.com/Huzaifpathan/CityFlux"
    },

    snapeat: {
        title: "SNAPEAT — AI-Powered Nutrition Tracking App",
        badge: "🥗 Edge AI & Nutrition Intelligence",
        category: "Android · Machine Learning · Mobile API Integration",
        image: "snapeat.png",
        summary: "An AI-powered nutrition app combining image-based food recognition, barcode scanning, and nutrition API integration. Pandas and NumPy aggregate logged food data into daily summaries.",
        problem: "Nutrition tracking can require repeated manual entry and make it difficult to see daily food totals at a glance.",
        solution: "Built food-image recognition and barcode scanning into a mobile nutrition app, connected it to nutrition APIs, and summarized logged data with Pandas and NumPy.",
        architecture: "The Android app combines Java and Kotlin with Google ML Kit, Firebase, and REST API integrations. Logged food data is aggregated for daily summaries.",
        challenges: [
            "Connecting image recognition and barcode scans with nutrition API results.",
            "Organizing meal logs into clear daily nutrition summaries.",
            "Combining data summaries with a simple Android tracking experience."
        ],
        technologies: ["Java", "Kotlin", "Google ML Kit", "Firebase", "REST APIs", "Pandas", "NumPy"],
        github: "https://github.com/VikasGholap06/SnapEat"
    },

    emomirror: {
        title: "EMO-MIRROR — Real-Time Facial Emotion Detection",
        badge: "🧠 On-Device Computer Vision & Sentiment",
        category: "Android · Computer Vision · Edge AI",
        image: "emomirror.png",
        summary: "An Android facial emotion detection and mood-tracking app built with CameraX and Google ML Kit Vision, with confidence scoring, emotion breakdowns, and progress visuals.",
        problem: "The app explores how a mobile camera experience can present facial emotion analysis and mood history in an accessible way.",
        solution: "Built an on-device facial emotion analysis experience with Java, CameraX, and Google ML Kit Vision, then presented results through confidence scores, emotion breakdowns, and progress visuals.",
        challenges: [
            "Presenting camera-based analysis results clearly in the Android UI.",
            "Organizing emotion confidence scores into a readable breakdown.",
            "Showing progress over time in the app."
        ],
        technologies: ["Java", "Google ML Kit Vision API", "CameraX", "SurfaceView Overlay", "Material Design 3", "SharedPreferences"],
        github: "https://github.com/VikasGholap06/EmoMirror"
    },

    newsclass: {
        title: "NEWS-CLASSIFICATION — BERT-Based NLP Pipeline",
        badge: "⚡ Transformer NLP & Deep Learning",
        category: "Data Science · NLP · Text Classification",
        isBertDiagram: true,
        summary: "A BERT-based news-classification project using the AG News dataset, with data preparation, model evaluation, and a Gradio interface for interactive inference.",
        problem: "Sorting news articles by topic is a useful NLP task that needs both a trained text model and a way to review its predictions.",
        solution: "Prepared the AG News dataset with Pandas and Scikit-learn, trained a BERT-based classifier, evaluated accuracy, precision, and recall, and built a Gradio inference interface.",
        challenges: [
            "Preparing text data for the BERT classification workflow.",
            "Reviewing model results with accuracy, precision, and recall.",
            "Making model predictions accessible through an interactive Gradio interface."
        ],
        technologies: ["Python", "Pandas", "Scikit-Learn", "BERT", "Transformers", "Gradio"],
        github: "https://github.com/VikasGholap06",
        githubLabel: "View GitHub Profile"
    },

    studhelper: {
        title: "STUD-HELPER — Academic Productivity & AI Suite",
        badge: "🎓 LLM-Powered Student Suite",
        category: "Android · Generative AI · Cloud Services",
        image: "studehelper.png",
        summary: "An integrated academic utility platform uniting optical character recognition (OCR) note digitizing, OpenRouter generative LLM summarization, dynamic LaTeX/PDF resume building, and CGPA projection engines.",
        problem: "Students frequently rely on disjointed, ad-hoc apps for class timetable schedules, assignment tracking, OCR note transcription, GPA calculation, and resume formatting.",
        solution: "Engineered a single high-performance Android application providing OCR note scanning with AI-generated executive summaries via OpenRouter LLM API, alongside an interactive semester CGPA calculator and automated resume generator.",
        challenges: [
            "Optimizing OCR image pre-processing (binarization and contrast enhancement) for handwritten lecture notes.",
            "Streaming OpenRouter LLM responses smoothly into the Android UI without freezing the main thread.",
            "Designing a flexible CGPA computation engine accommodating varying credit distribution systems."
        ],
        technologies: ["Java", "Firebase", "OpenRouter LLM API", "Android OCR Engine", "Camera API", "PDF Generation"],
        github: "https://github.com/VikasGholap06/StudHelper"
    }
};

// --- DOM INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavbarScroll();
    initMobileMenu();
    initProjectFilters();
    initProjectModal();
    initEmailCopy();
    initContactForm();
    initScrollReveal();
    initDynamicYear();
    initSmoothAnchors();
});

// ==========================================================================
// THEME MANAGEMENT (DARK-MODE FIRST)
// ==========================================================================
function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const htmlEl = document.documentElement;
    const savedTheme = localStorage.getItem('vg_theme') || 'dark';

    htmlEl.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlEl.setAttribute('data-theme', nextTheme);
            localStorage.setItem('vg_theme', nextTheme);
            updateThemeIcon(nextTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggleBtn i');
    if (icon) {
        if (theme === 'dark') {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
    }
}

// ==========================================================================
// NAVBAR SCROLL & ACTIVE TRACKING
// ==========================================================================
function initNavbarScroll() {
    const header = document.getElementById('siteHeader');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-item');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        // Navbar background shadow
        if (header) {
            if (scrollY > 30) {
                header.style.borderBottomColor = 'var(--border-hover)';
            } else {
                header.style.borderBottomColor = 'var(--border-subtle)';
            }
        }

        // Back to top button visibility
        if (backToTopBtn) {
            if (scrollY > 450) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.pointerEvents = 'auto';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.pointerEvents = 'none';
            }
        }

        // Active Section Highlight
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
            mobileLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    }, { passive: true });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// ==========================================================================
// MOBILE MENU CONTROLLER
// ==========================================================================
function initMobileMenu() {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const drawer = document.getElementById('mobileNavDrawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!toggleBtn || !drawer) return;

    toggleBtn.addEventListener('click', () => {
        const isActive = drawer.classList.contains('active');
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    function openMobileMenu() {
        drawer.classList.add('active');
        toggleBtn.classList.add('active');
        toggleBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        drawer.classList.remove('active');
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
}

// ==========================================================================
// PROJECT FILTER TABS
// ==========================================================================
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card-large');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const selectedFilter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category') || '';
                if (selectedFilter === 'all' || categories.includes(selectedFilter)) {
                    card.style.display = 'grid';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 20);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });
}

// ==========================================================================
// INTERACTIVE PROJECT DEEP DIVE MODAL
// ==========================================================================
function initProjectModal() {
    const modalOverlay = document.getElementById('projectModalOverlay');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const triggerButtons = document.querySelectorAll('[data-project-trigger]');

    if (!modalOverlay) return;

    // Trigger Modal Open
    triggerButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project-trigger');
            const data = PROJECTS_DATA[projectId];
            if (data) {
                renderModalContent(data);
                openModal();
            }
        });
    });

    // Close handlers
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    function openModal() {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function renderModalContent(data) {
        document.getElementById('modalCategory').textContent = data.category;
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalBadge').textContent = data.badge;
        document.getElementById('modalProblem').textContent = data.problem;
        document.getElementById('modalSolution').textContent = data.solution;
        document.getElementById('modalArchitecture').textContent = data.architecture;

        // Visual preview
        const visualBox = document.getElementById('modalVisualBox');
        if (data.isBertDiagram) {
            visualBox.innerHTML = `
                <div class="bert-diagram-container" style="max-width: 600px; margin: 0 auto;">
                    <div class="bert-diag-header">
                        <span><i class="fas fa-microchip"></i> BERT News Classification</span>
                        <span>Natural Language Processing</span>
                    </div>
                    <div class="bert-diag-pipeline">
                        <div class="diag-step">
                            <div class="diag-step-label"><i class="fas fa-file-alt"></i> AG News Dataset</div>
                            <span class="diag-step-value">News text and categories</span>
                        </div>
                        <div class="diag-step">
                            <div class="diag-step-label"><i class="fas fa-filter"></i> Data Preparation</div>
                            <span class="diag-step-value">Pandas + Scikit-learn</span>
                        </div>
                        <div class="diag-step step-transformer">
                            <div class="diag-step-label"><i class="fas fa-network-wired"></i> BERT Classifier</div>
                            <span class="diag-step-value">Context-aware text classification</span>
                        </div>
                        <div class="diag-step">
                            <div class="diag-step-label"><i class="fas fa-chart-bar"></i> Model Evaluation</div>
                            <span class="diag-step-value">Accuracy · Precision · Recall</span>
                        </div>
                        <div class="diag-step step-output">
                            <div class="diag-step-label"><i class="fas fa-check-circle"></i> Gradio Inference</div>
                            <span class="diag-step-value">Interactive predictions</span>
                        </div>
                    </div>
                </div>
            `;
        } else {
            visualBox.innerHTML = `
                <div style="text-align: center; background: #000; border-radius: var(--radius-md); padding: 1rem; border: 1px solid var(--border-subtle); max-height: 380px; overflow: hidden; display: flex; justify-content: center; align-items: center;">
                    <img src="${data.image}" alt="${data.title}" style="max-height: 340px; width: auto; object-fit: contain; border-radius: 8px;">
                </div>
            `;
        }

        // Challenges list
        const challengesList = document.getElementById('modalChallengesList');
        challengesList.innerHTML = data.challenges.map(item => `<li>${item}</li>`).join('');

        // Tech pills
        const techList = document.getElementById('modalTechList');
        techList.innerHTML = data.technologies.map(tech => `<span class="tech-pill">${tech}</span>`).join('');

        // Links
        const githubBtn = document.getElementById('modalGithubBtn');
        githubBtn.href = data.github;
        githubBtn.innerHTML = `<i class="fab fa-github"></i> ${data.githubLabel || 'View Source Code'}`;
    }
}

// ==========================================================================
// ONE-CLICK EMAIL COPY & TOAST NOTIFICATION
// ==========================================================================
function initEmailCopy() {
    const copyBtns = document.querySelectorAll('.copy-email-trigger');
    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');

    const EMAIL = 'vikasbgholap27@gmail.com';

    copyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            navigator.clipboard.writeText(EMAIL).then(() => {
                showToast(`✓ Copied ${EMAIL} to clipboard!`);
            }).catch(() => {
                showToast(`Email: ${EMAIL}`);
            });
        });
    });

    function showToast(msg) {
        if (!toast || !toastMsg) return;
        toastMsg.textContent = msg;
        toast.classList.add('active');

        setTimeout(() => {
            toast.classList.remove('active');
        }, 3500);
    }
}

// ==========================================================================
// CONTACT FORM HANDLER
// ==========================================================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('formSubmitBtn');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('formName').value.trim();
        const email = document.getElementById('formEmail').value.trim();
        const subject = document.getElementById('formSubject').value.trim();
        const message = document.getElementById('formMessage').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in your name, email, and message.');
            return;
        }

        // Show loading state
        if (submitBtn) {
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing Dispatch...';
            submitBtn.disabled = true;
        }

        const encodedSubject = encodeURIComponent(`Portfolio Inquiry from ${name}: ${subject || 'Collaboration'}`);
        const encodedBody = encodeURIComponent(`Sender Name: ${name}\nSender Email: ${email}\n\nProject / Inquiry Details:\n${message}\n\n--- Sent via Vikas Gholap Portfolio Contact Form ---`);
        const recipient = 'vikasbgholap27@gmail.com';

        // Prefer direct Gmail compose tab
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodedSubject}&body=${encodedBody}`;
        
        // Open Gmail compose in new tab
        window.open(gmailUrl, '_blank');

        setTimeout(() => {
            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Email Dispatch Ready!';
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message Directly';
                    submitBtn.disabled = false;
                    form.reset();
                }, 3000);
            }
        }, 800);
    });
}

// ==========================================================================
// SCROLL REVEAL (INTERSECTION OBSERVER)
// ==========================================================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-init');

    if (!('IntersectionObserver' in window)) {
        revealElements.forEach(el => el.classList.add('revealed'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ==========================================================================
// DYNAMIC FOOTER YEAR
// ==========================================================================
function initDynamicYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// ==========================================================================
// SMOOTH ANCHOR SCROLL
// ==========================================================================
function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = target.offsetTop - 70;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });
}
