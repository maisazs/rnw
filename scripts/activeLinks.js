const sections = document.querySelectorAll("section, header"); // Incluímos o header aqui
const navLinks = document.querySelectorAll("nav a");

function updateActiveLink() {
  let currentSectionId = "";

  // Verifica qual seção está no centro da viewport
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSectionId = section.id;
    }
  });

  // Atualiza os links com base na seção visível
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("text-white");
      link.classList.remove("text-gray-5");
    } else {
      link.classList.remove("text-white");
      link.classList.add("text-gray-5");
    }
  });
}

// Chama a função ao rolar a página e ao carregar
window.addEventListener("scroll", updateActiveLink);
window.addEventListener("DOMContentLoaded", updateActiveLink);