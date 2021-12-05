//Movement Animation to happen

//SELECTORS
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//items
const image = document.querySelector('img');
const title = document.querySelector('h1');
const description = document.querySelector('h3');
const circle = document.querySelector('.circle');

//EVENT LSITENERS
container.addEventListener('mousemove', (e) => {
  const xAxis = (window.innerHeight / 2 - e.pageX) / 15;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 15;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
// Animate In
container.addEventListener('mouseenter', (e) => {
  card.style.transition = 'none';
  image.style.transform = 'translateZ(70px) rotateZ(-25deg)';
  title.style.transform = 'translateZ(80px)';
  description.style.transform = 'translateZ(30px)';
  circle.style.transform = 'rotate(45deg)';
});

// Animate Out
container.addEventListener('mouseleave', (e) => {
  card.style.transition = 'all .5s ease';
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  image.style.transform = 'translateZ(0) rotateZ(0)';
  title.style.transform = 'translateZ(0)';
  description.style.transform = 'translateZ(0)';
});
