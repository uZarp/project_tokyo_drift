document.addEventListener('DOMContentLoaded', () => {
  const carCards = document.querySelectorAll('.card-infos img');
  const detailCard = document.getElementById('detail-card');
  const closeButton = document.getElementById('close-btn');
  const carTitle = document.getElementById('car-title');
  const carDescription = document.getElementById('car-description');


  carCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const carName = e.target.nextElementSibling.textContent;

      // Encontrando o dado correspondente no array
      const carData = dados.find(dado => dado.titulo === carName);

      // Se encontrar o dado, preenche o título e descrição
      if (carData) {
        carTitle.innerHTML = carData.titulo;
        carDescription.innerHTML = carData.descricao;
        carDescription.innerHTML += `<br><br><a href="${carData.link}" class="btn-link">Saiba mais</a>`;
      } else {
        carTitle.innerHTML = carName;
        carDescription.innerHTML = "No description available.";
      }
      
      
      // Adiciona a classe 'active' ao card clicado
      e.target.classList.add('active');

      // Remove classes de posicionamento do detailCard
      detailCard.classList.remove('left', 'center', 'right');

      // Define a posição do detailCard
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

      // Exibe o card de detalhes e aplica o efeito de blur no fundo
      detailCard.style.display = 'block';
      document.body.classList.add('blurred');
    });
  });

  closeButton.addEventListener('click', () => {
    // Esconde o card de detalhes e remove o efeito de blur
    detailCard.style.display = 'none';
    document.body.classList.remove('blurred');

    // Remove a classe 'active' de todos os cards
    carCards.forEach(card => {
      card.classList.remove('active');
    });
  });
});
