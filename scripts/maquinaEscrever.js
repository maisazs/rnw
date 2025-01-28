//efeito maquina de escrever
const words = ["Visão Estratégica", "Qualidade", "Profissionalismo", "Personalidade"];
const dynamicText = document.getElementById('dynamic-text');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delayAfterWord = 800;

function typeEffect() {
  const currentWord = words[wordIndex];
  const visibleText = currentWord.substring(0, charIndex);

  dynamicText.textContent = visibleText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
  } else {
    if (!isDeleting) {
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, delayAfterWord);
      return;
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 70 : 150);
}

typeEffect();