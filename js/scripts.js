document.addEventListener('DOMContentLoaded', () => {
  const carCards = document.querySelectorAll('.card-infos img');
  const detailCard = document.getElementById('detail-card');
  const closeButton = document.getElementById('close-btn');
  const carTitle = document.getElementById('car-title');
  const carDescription = document.getElementById('car-description');

  carCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const carName = e.target.nextElementSibling.textContent;
      carTitle.textContent = carName;

      // Placeholder descriptions, you can replace with actual data
      const carDescriptions = {
        'Mazda RX7': 'The Mazda RX-7 is a sports car with a unique rotary engine and sleek design.',
        'Skyline GT-R': 'The Nissan Skyline GT-R is a legendary car known for its performance and technology.',
        'Supra MK4': 'The Toyota Supra MK4 is a classic sports car with a powerful engine and iconic design.'
      };

      carDescription.textContent = carDescriptions[carName] || "No description available.";

      // Manter o hover do tamanho final até abrir o card
      e.target.classList.add('active');

      // Remover classes anteriores
      detailCard.classList.remove('left', 'center', 'right');

      // Adicionar a classe de posição apropriada
      switch (carName) {
        case 'Mazda RX7':
          detailCard.classList.add('left');
          break;
        case 'Skyline GT-R':
          detailCard.classList.add('center');
          break;
        case 'Supra MK4':
          detailCard.classList.add('right');
          break;
      }

      // Mostrar o card e aplicar o efeito de blur
      detailCard.style.display = 'block';
      document.body.classList.add('blurred');
    });
  });

  closeButton.addEventListener('click', () => {
    // Esconder o card e remover o efeito de blur
    detailCard.style.display = 'none';
    document.body.classList.remove('blurred');

    // Remover a classe 'active' de todas as imagens
    carCards.forEach(card => {
      card.classList.remove('active');
    });
  });
});
