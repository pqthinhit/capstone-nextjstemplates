// Header Sticky Scroll (từ main)
function initHeaderScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            header.classList.add('bg-white', 'dark:bg-[#181C31]', 'shadow-sm', 'dark:shadow-neutral-800/50', 'py-4');
            header.classList.remove('bg-transparent', 'py-7');
        } else {
            header.classList.remove('bg-white', 'dark:bg-[#181C31]', 'shadow-sm', 'dark:shadow-neutral-800/50', 'py-4');
            header.classList.add('bg-transparent', 'py-7');
        }
    });
}

// FAQ Accordion Toggle
function toggleFaq(button) {
    const faqItem = button.parentElement;
    const icon = button.querySelector('.faq-item__icon');
    const isActive = faqItem.classList.contains('faq-item--active');

    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('faq-item--active');
        item.querySelector('.faq-item__icon').textContent = '+';
    });

    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('faq-item--active');
        icon.textContent = '−';
    }
}

// Testimonials Slider functionality (Slick)
function initTestimonialsSlider() {
    if (typeof $ !== 'undefined' && $.fn.slick) {
        $('#testimonialsSlider').slick({
            dots: true,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
}

// Scroll to top functionality
function initScrollTop() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
}

// Scroll Animation (IntersectionObserver)
function initScrollAnimations() {
    const animElements = document.querySelectorAll('.anim-fade-left, .anim-fade-right, .anim-fade-top, .animate_top, .animate_left, .animate_down, .animate_right');
    if (!animElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('anim-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    animElements.forEach(el => observer.observe(el));
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initTestimonialsSlider();
    initScrollTop();
    initScrollAnimations();
});

function initDarkMode() {
    const themeToggleBtns = document.querySelectorAll('[data-theme-toggle]');
    const htmlElement = document.documentElement;


    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    themeToggleBtns.forEach((themeToggleBtn) => {
        themeToggleBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            htmlElement.classList.toggle('dark');
            localStorage.theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
});
