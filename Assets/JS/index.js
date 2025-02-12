document.addEventListener("DOMContentLoaded", () => {
  let containerCarrousel = document.getElementById("img_carrousel");
  if (!containerCarrousel) {
    console.error("Elemento #img_carrousel não encontrado!");
    return;
  }

  let imgWidth = containerCarrousel.children[0]?.offsetWidth || 200; // Valor padrão para evitar erro
  let index = 0;

  function nextCarrousel() {
    if (!containerCarrousel.children.length) return;
    index = (index + 1) % containerCarrousel.children.length;
    containerCarrousel.scrollTo({
      left: index * imgWidth,
      behavior: "smooth",
    });
  }

  function prevCarrousel() {
    if (!containerCarrousel.children.length) return;
    index = (index - 1 + containerCarrousel.children.length) % containerCarrousel.children.length;
    containerCarrousel.scrollTo({
      left: index * imgWidth,
      behavior: "smooth",
    });
  }

  document.querySelector(".next").addEventListener("click", nextCarrousel);
  document.querySelector(".prev").addEventListener("click", prevCarrousel);

  let interval = setInterval(nextCarrousel, 3000);

  containerCarrousel.addEventListener("mouseenter", () => clearInterval(interval));
  containerCarrousel.addEventListener("mouseleave", () => interval = setInterval(nextCarrousel, 1800));
});
