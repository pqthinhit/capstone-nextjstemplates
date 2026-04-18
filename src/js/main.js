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
            infinite: true,
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

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    initTestimonialsSlider();
    initScrollTop();
});
