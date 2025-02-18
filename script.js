// Função para navegar entre as imagens
let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Função para mostrar a imagem atual
function showSlide(index) {
  // Garantir que o índice esteja dentro do intervalo
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  // Atualiza o posicionamento do slider
  const offset = -100 * currentSlide;
  document.querySelector('.photo-slider').style.transform = `translateX(${offset}%)`;
}

// Ação do botão "Anterior"
prevButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

// Ação do botão "Próximo"
nextButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

// Inicializa a exibição da primeira imagem
showSlide(currentSlide);

// Função para calcular o tempo desde o início do relacionamento
function updateTimer() {
  const startDate = new Date('2024-01-25');
  const currentDate = new Date();
  const timeDiff = currentDate - startDate;
  
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);
  
  const remainingDays = days % 365;
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  const timeString = `${years} anos, ${remainingDays} dias, ${remainingHours} horas, ${remainingMinutes} minutos, ${remainingSeconds} segundos`;

  document.getElementById('time').textContent = timeString;
}

// Atualiza o contador de tempo a cada segundo
setInterval(updateTimer, 1000);

// Inicializa o contador imediatamente ao carregar a página
updateTimer();
