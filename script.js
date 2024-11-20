// Анимация для появления секций при прокрутке
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.navbar ul li a');

window.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks[index].style.color = '#f39c12';
            navLinks[index].style.transform = 'scale(1.2)';
        } else {
            navLinks[index].style.color = '#fff';
            navLinks[index].style.transform = 'scale(1)';
        }
    });
});

// Плавная прокрутка по ссылкам
navLinks.forEach(link => {
    link.addEventListener
