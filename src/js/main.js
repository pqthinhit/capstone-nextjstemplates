window.addEventListener('scroll', function () {
    const header = document.getElementById('main-header');
    // Khi cuộn xuống quá 20px
    if (window.scrollY > 20) {
        // Thêm màu nền trắng, thu nhỏ padding (từ py-7 xuống py-4) và hiện shadow
        header.classList.add('bg-white', 'dark:bg-neutral-900', 'shadow-sm', 'dark:shadow-neutral-800/50', 'py-4');
        header.classList.remove('bg-transparent', 'py-7');
    } else {
        // Khi trở về đỉnh trang: xóa bg, xóa shadow, khôi phục padding gốc
        header.classList.remove('bg-white', 'dark:bg-neutral-900', 'shadow-sm', 'dark:shadow-neutral-800/50', 'py-4');
        header.classList.add('bg-transparent', 'py-7');
    }
});