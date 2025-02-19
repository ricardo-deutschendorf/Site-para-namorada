let clickCount = 0;

document.getElementById('button2').addEventListener('click', function () {
  clickCount++;

  let button2 = document.getElementById('button2');
  let questcontainer = document.getElementById('gif-container'); // Certifique-se de que o contêiner está definido

  // Define uma nova frase imediatamente
  let newText = '';
  if (clickCount === 1) {
    newText = 'Tem certeza?';
  } else if (clickCount === 2) {
    newText = "Não sei se você entendeu direito, tem certeza?";
  }

  // Adiciona um delay de 1 segundo antes de aplicar a mudança
  setTimeout(function () {
    button2.innerText = newText;
  }, 1000);

  let button1 = document.getElementById('button1');

  // Adiciona uma transição suave
  button1.style.transition = 'transform 0.5s ease-in-out';
  button1.style.transform = 'scale(7)'; // Aumenta o tamanho
  button1.style.zIndex = 5; // Garante que o botão verde fique acima do GIF

  // Configura o botão 2 para não interferir na interação
  button2.style.position = 'fixed';
  button2.style.zIndex = -1; // Garante que o botão vermelho fique abaixo do botão verde

  setTimeout(function () {
    button2.style.zIndex = 2;
  }, 750);

  // Anima o GIF para descer devagarinho e ficar abaixo do botão verde
  let gifContainer = document.getElementById('gif-container');
  gifContainer.style.transition = 'transform 1s ease-in-out';
  gifContainer.style.transform = 'translateY(60px)'; // Ajuste a distância conforme necessário
  gifContainer.style.zIndex = 3; // Garante que o GIF fique abaixo do botão verde

  // Move o botão vermelho mais para o lado
  button2.style.transition = 'transform 1s ease-in-out';
  setTimeout(function () {
    button2.style.transform = 'translateX(300%)'; // Move o botão vermelho mais para o lado
    button2.style.zIndex = 6; // Garante que o botão vermelho fique acima do botão verde após mover
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
    emojiBrabo.style.width = '150px';
    emojiBrabo.style.height = '150px';
    emojiBrabo.style.animation = 'swing 1s infinite';
    emojiBrabo.style.opacity = '0';
    emojiBrabo.style.transition = 'opacity 1s ease-in-out';
    document.body.appendChild(emojiBrabo);

    setTimeout(() => {
      emojiBrabo.style.opacity = '1';
    }, 300);

    setTimeout(() => {
      emojiBrabo.style.opacity = '0';
    }, 3300);
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

// Adiciona o evento mouseover para teletransportar o botão vermelho
if (clickCount >= 1) {
document.getElementById('button2').addEventListener('mouseover', function () {
  let button2 = document.getElementById('button2');
  let questcontainer = document.getElementById('gif-container'); // Certifique-se de que o contêiner está definido

  const buttonWidth = button2.offsetWidth;
  const buttonHeight = button2.offsetHeight;
  const containerWidth = questcontainer.offsetWidth;
  const containerHeight = questcontainer.offsetHeight;  const NewX = Math.floor(Math.random() * (containerWidth - buttonWidth));  const NewY = Math.floor(Math.random() * (containerHeight - buttonHeight));  button2.style.left = NewX + "px";  button2.style.top = NewY + "px";});
};