const cards = document.querySelectorAll('.card');
const profile = document.querySelector('.profile');
cards.forEach((card) =>
  card.addEventListener('click', () => {
    profile.classList.toggle('active');
  })
);

const closeBtn = document.querySelector('.button-close');
closeBtn.addEventListener('click', () => profile.classList.toggle('active'));
