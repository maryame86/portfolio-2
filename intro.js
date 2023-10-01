
const textContainer = document.getElementById('text-container');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeRandomWordColor() {
  const words = textContainer.textContent.split(' ');

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    words[randomIndex] = `<span style="color: ${getRandomColor()}">${randomWord}</span>`;
  }

  textContainer.innerHTML = words.join(' ');
}

// Change color of 6 random words every 3 seconds (3000 milliseconds)
setInterval(changeRandomWordColor, 1000);
