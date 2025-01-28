//efeito scroll
gsap.to(".row1", {
  x: "50%",
  scrollTrigger: {
    trigger: ".row1",
    start: "top bottom",
    end: "bottom top",
    scrub: true, 
  },
});

gsap.to(".row2", {
  x: "-50%",
  scrollTrigger: {
    trigger: ".row2",
    start: "top bottom", 
    end: "bottom top",   
    scrub: true,
  },
});