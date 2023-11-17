const menuBtn = document.getElementById('nav-menu')
const navLinks = document.getElementById('nav-list')

menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open')
})