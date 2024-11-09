document.addEventListener("DOMContentLoaded", function() {
    // Animación de scroll suave para enlaces
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Animación de aparecer al hacer scroll
    const skills = document.querySelectorAll(".skill");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    });

    skills.forEach(skill => observer.observe(skill));
});

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
