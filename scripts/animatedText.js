// texto animado
gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.scroll-highlight');
splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: ['chars', 'words'] });
  gsap.fromTo(
    text.chars,
    { color: "#202020" }, // Cor inicial do texto
    {
      color: "#D1D1D1", // Cor final do texto
      scrollTrigger: {
        trigger: char,
        start: "top 90%",
        end: () => window.innerWidth < 640 ? "top 10%" : "top 30%",
        scrub: true,
      },
      stagger: 0.1,
    }
  );
});