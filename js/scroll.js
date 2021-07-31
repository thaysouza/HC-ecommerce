function initScroll() {
    const links = document.querySelectorAll('.scroll-menu a[href^="#"]');

    function scrollSection(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');

        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    links.forEach((link) => {
        link.addEventListener('click', scrollSection);
    });
}

initScroll();