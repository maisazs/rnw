//cartões de passos
const cards = document.querySelectorAll('.card-open, .card-close');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(otherCard => {
      if (otherCard !== card && otherCard.classList.contains('card-open')) { 
        setTimeout(() => {
          otherCard.classList.remove('card-open');
          otherCard.classList.add('card-close');
          toggleRelatedClasses(otherCard, 'open', 'close');
        }, 500);
      }
    });

    if (card.classList.contains('card-open')) {
      setTimeout(() => {
        card.classList.remove('card-open');
        card.classList.add('card-close');
        toggleRelatedClasses(card, 'open', 'close');
      }, 500);
    } else if (card.classList.contains('card-close')) {
      setTimeout(() => {
        card.classList.remove('card-close');
        card.classList.add('card-open');
        toggleRelatedClasses(card, 'close', 'open');
      }, 500);
    }
  });
});

function toggleRelatedClasses(card, from, to) {
  const relatedClasses = [
    'card-num-',
    'passo-t-',
    'card-txt-',
    'passo-f-',
    'card-num-bg-',
    'card-top-'
  ];

  relatedClasses.forEach(baseClass => {
    const elements = card.querySelectorAll(`[class*="${baseClass}${from}"]`);
    elements.forEach(element => {
      const currentClass = element.className.match(new RegExp(`${baseClass}${from}`));
      if (currentClass) {
        const newClass = currentClass[0].replace(from, to);
        element.classList.remove(currentClass[0]);
        element.classList.add(newClass);
      }
    });
  });
}