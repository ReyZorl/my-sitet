// Простая анимация для перехода между секциями при прокрутке
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.navbar ul li a');

window.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        // Прокрутка и изменение цвета навигации
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks[index].style.color = '#f39c12';
            navLinks[index].style.transform = 'scale(1.2)';
        } else {
            navLinks[index].style.color = '#fff';
            navLinks[index].style.transform = 'scale(1)';
        }
    });
});

// Плавная прокрутка до секции при клике на ссылку
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
