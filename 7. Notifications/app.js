document.querySelector('.search-icon').addEventListener('click', function() {
  document.querySelector('.search-input').classList.toggle('active');
});

document.querySelector('.menu__icon').addEventListener('click', function() {
  console.log('qwe')
  document.querySelector('.panel').classList.toggle('show-menu');
  document.querySelector('.menu').classList.toggle('active');
});