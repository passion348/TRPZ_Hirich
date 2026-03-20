let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 5;

function checkGuess() {
  const userGuess = Number(document.getElementById("guess").value);
  const message = document.getElementById("message");
  const attemptsText = document.getElementById("attempts");

  if (!userGuess) {
    message.innerText = "Введіть число!";
    return;
  }

  if (attempts >= maxAttempts) {
    message.innerText = "Спроби закінчились! Натисніть 'Зіграти ще!";
    return;
  }

  attempts++;

  if (userGuess === secretNumber) {
    message.innerText = `Ви вгадали число за ${attempts} спроб!`;
    attemptsText.innerText = "";
    return;
  }

  if (attempts === maxAttempts) {
    message.innerText = `Ви програли! Загадане число було: ${secretNumber}`;
    attemptsText.innerText = "";
    return;
  }

  if (userGuess > secretNumber) {
    message.innerText = "Загадане число менше!";
  } else {
    message.innerText = "Загадане число більше!";
  }

  attemptsText.innerText = `Спроба: ${attempts} / ${maxAttempts}`;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  document.getElementById("message").innerText = "";
  document.getElementById("attempts").innerText = "";
  document.getElementById("guess").value = "";
}

const modal = document.getElementById("modal");
const btn = document.getElementById("infobtn");
const closeBtn = document.getElementById("closebtn");

btn.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};