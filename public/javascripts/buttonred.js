let clickCount = 0;

document.getElementById('button2').addEventListener('click', function () {
  clickCount++;

  // Adiciona um delay de 1 segundo antes de trocar a frase
  setTimeout(function () {
    document.getElementById('button2').innerText = 'Tem certeza?';
  }, 1000);

  let button1 = document.getElementById('button1');

  // Adiciona uma transição suave
  button1.style.transition = 'transform 0.5s ease-in-out';

  button1.style.transform = 'scale(7)'; // Aumenta o tamanho
  button1.style.zIndex = 1; // Garante que o botão verde fique acima do GIF

  // Configura o botão 2 para não interferir na interação
  let button2 = document.getElementById('button2');
  button2.style.position = 'fixed';
  button2.style.zIndex = -1;

  // Anima o GIF para descer devagarinho e ficar abaixo do botão verde
  let gifContainer = document.getElementById('gif-container');
  gifContainer.style.transition = 'transform 1s ease-in-out';
  gifContainer.style.transform = 'translateY(60px)'; // Ajuste a distância conforme necessário
  gifContainer.style.zIndex = -2; // Garante que o GIF fique abaixo do botão verde

  // Move o botão vermelho lentamente para o lado
  button2.style.transition = 'transform 1s ease-in-out';
  setTimeout(function () {
    button2.style.transform = 'translateX(150%)'; // Move o botão vermelho 50px para o lado
  }, 750);

  // Exibe a imagem emojiBrabo.webp na primeira vez que o botão vermelho for clicado
  if (clickCount === 1) {
    let emojiBrabo = document.createElement('img');
    emojiBrabo.src = '/images/emojiBrabo.webp';
    emojiBrabo.alt = 'Emoji Brabo';
    emojiBrabo.style.position = 'fixed';
    emojiBrabo.style.top = '8%';
    emojiBrabo.style.left = '60%';
    emojiBrabo.style.transform = 'translate(-50%, -50%)';
    emojiBrabo.style.zIndex = '11';
    emojiBrabo.style.width = '150px'; // Diminui o tamanho do emoji
    emojiBrabo.style.height = '150px'; // Diminui o tamanho do emoji
    emojiBrabo.style.animation = 'swing 1s infinite'; // Adiciona a animação de balanço
    emojiBrabo.style.opacity = '0'; // Inicialmente invisível
    emojiBrabo.style.transition = 'opacity 1s ease-in-out'; // Transição suave de opacidade
    document.body.appendChild(emojiBrabo);

    // Faz o emoji surgir devagar
    setTimeout(function () {
      emojiBrabo.style.opacity = '1';
    }, 300);
  }

  // Adiciona a animação de balanço
  let style = document.createElement('style');
  style.innerHTML = `
    @keyframes swing {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      50% { transform: translate(-50%, -50%) rotate(10deg); }
      100% { transform: translate(-50%, -50%) rotate(0deg); }
    }
  `;
  document.head.appendChild(style);
});