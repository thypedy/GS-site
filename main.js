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

//carrossel
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function prevSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Autoplay do carrossel
const autoplayInterval = 5000; // 5 segundos
let autoplayTimer;

function startAutoplay() {
  autoplayTimer = setInterval(nextSlide, autoplayInterval);
}

function stopAutoplay() {
  clearInterval(autoplayTimer);
}

startAutoplay();

// Parar autoplay quando o mouse estiver sobre o carrossel
const carousel = document.querySelector('.carousel-container');

carousel.addEventListener('mouseenter', stopAutoplay);
carousel.addEventListener('mouseleave', startAutoplay);

//Ir para Criar conta
document.addEventListener('DOMContentLoaded', () => {
  const createAccountBtn = document.getElementById('createAccountBtn');

  if (createAccountBtn) {
    createAccountBtn.addEventListener('click', () => {
      window.location.href = 'criarConta.html';
    });
  }
});


//Ir Login
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  }
});

// Verifica se o login foi bem-sucedido (suponha que a variável isLoggedIn seja verdadeira)
const isLoggedIn = true; // Supondo que o login seja bem-sucedido

// Função para atualizar a exibição dos elementos após o login
function updateUIAfterLogin() {
  // Oculta os botões de criar conta e login
  const createAccountBtn = document.getElementById('createAccountBtn');
  const loginBtn = document.getElementById('loginBtn');
  if (createAccountBtn && loginBtn) {
    createAccountBtn.style.display = 'none';
    loginBtn.style.display = 'none';
  }
  
  // Exibe o ícone de perfil
  const profileIcon = document.getElementById('profileIcon');
  if (profileIcon) {
    profileIcon.style.display = 'block';
  }
}

// Verifica se o login foi bem-sucedido e atualiza a interface
if (isLoggedIn) {
  updateUIAfterLogin();
}
