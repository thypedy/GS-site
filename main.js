const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Animação para todas as seções
document.querySelectorAll(".section__container").forEach((section) => {
  ScrollReveal().reveal(section, scrollRevealOption);
});

// Animação para todos os textos dentro das seções
document.querySelectorAll(".section__subheader, .section__header, .section__description, .btn").forEach((element, index) => {
  ScrollReveal().reveal(element, {
    ...scrollRevealOption,
    delay: index * 200, // Adiciona um pequeno atraso para cada elemento
  });
});

// Animação para todas as imagens dentro das seções
document.querySelectorAll(".about__image img, .solution__image img, .daily-usage__images img").forEach((image, index) => {
  ScrollReveal().reveal(image, {
    ...scrollRevealOption,
    delay: index * 200, // Adiciona um pequeno atraso para cada imagem
    origin: "left", // Animação vem da esquerda
  });
});

// Animação para os textos na sessão 4
document.querySelectorAll(".audience__content h2, .audience__content p").forEach((element, index) => {
  ScrollReveal().reveal(element, {
    ...scrollRevealOption,
    delay: index * 200, // Adiciona um pequeno atraso para cada elemento
  });
});

// Animação para os itens da lista na sessão 5
document.querySelectorAll(".benefits-list li").forEach((element, index) => {
  ScrollReveal().reveal(element, {
    ...scrollRevealOption,
    delay: index * 200, // Adiciona um pequeno atraso para cada elemento
  });
});

// Animação para as imagens na sessão 5
document.querySelectorAll(".solution-benefits__images img").forEach((image, index) => {
  ScrollReveal().reveal(image, {
    ...scrollRevealOption,
    delay: index * 200, // Adiciona um pequeno atraso para cada imagem
  });
});
