//sanfona
function toggleVisibility(element) {
  const paragraph = element.querySelector(".sanfona-texto-close, .sanfona-texto-open");

  if (paragraph) {
    if (paragraph.classList.contains("sanfona-texto-close")) {
      paragraph.classList.add("sanfona-texto-open");
      paragraph.classList.remove("sanfona-texto-close");
    } else {
      paragraph.classList.add("sanfona-texto-close");
      paragraph.classList.remove("sanfona-texto-open");
    }
  }

  const seta = element.querySelector(".sanfona-seta-close, .sanfona-seta-open");

  if (seta) {
    if (seta.classList.contains("sanfona-seta-close")) {
      seta.classList.add("sanfona-seta-open");
      seta.classList.remove("sanfona-seta-close");
    } else {
      seta.classList.add("sanfona-seta-close");
      seta.classList.remove("sanfona-seta-open");
    }
  }
}