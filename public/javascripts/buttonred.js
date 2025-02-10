document.getElementById('button2').addEventListener('click', function() {
  document.getElementById('button2').innerText = 'Tem certeza?';
  document.getElementById('button1').style.transform = 'scale(1.5)'; // Aumenta o tamanho do botão verde
  document.getElementById('button1').style.transition = 'transform 0.5s ease'; // Adiciona uma transição suave
});