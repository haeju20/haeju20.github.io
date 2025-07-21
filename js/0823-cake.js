const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');
const img10 = document.getElementById('img10');

document.getElementById('img4').addEventListener('click', function() {
  img4.classList.add('bl');
  img5.classList.remove('noLight');
  img9.classList.remove('bl');
});

document.getElementById('img9').addEventListener('click', function() {
  img4.classList.remove('bl');
  img5.classList.add('noLight');
  img9.classList.add('bl');
});

document.getElementById('img10').addEventListener('click', function() {
  img8.classList.toggle('piece');
  img10.classList.toggle('bl');
});