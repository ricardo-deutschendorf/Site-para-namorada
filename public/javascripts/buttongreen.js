document.getElementById('button1').addEventListener('click', function() {
  document.getElementById('question').innerText = 'Eu sabia que você clicaria em sim!';
  document.getElementById('gif').src = '/images/gifFofo2.gif'; // Alterar para o novo GIF
  document.getElementById('button1').style.display = 'none';
  document.getElementById('button2').style.display = 'none';
  document.querySelector('h1').style.display = 'none';
  document.getElementById('question').classList.add('text-grow'); // Adiciona a classe para crescer o texto
});