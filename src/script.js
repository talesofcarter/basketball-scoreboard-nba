const homescoreElement = document.querySelector(".home-score");
const guestscoreElement = document.querySelector(".guest-score");

function addScore(element, value) {
  const score = parseInt(element.innerHTML) + value;
  element.innerHTML = score;
}

function resetScore(element) {
  element.innerHTML = 0;
}

document.querySelectorAll('.container')
  .forEach((container) => {
    container.addEventListener('click', (event) => {
      const target = event.target;

      if (target.classList.contains('home-one-button')) {
        addScore(homescoreElement, 1);
      } else if (target.classList.contains('home-two-button')) {
        addScore(homescoreElement, 2);
      } else if (target.classList.contains('home-three-button')) {
        addScore(homescoreElement, 3);
      } else if (target.classList.contains('home-reset-button')) {
        resetScore(homescoreElement)
      } 

      else if(target.classList.contains('guest-one-button')) {
        addScore(guestscoreElement, 1);
      } else if (target.classList.contains('guest-two-button')) {
        addScore(guestscoreElement, 2);
      } else if (target.classList.contains('guest-three-button')) {
        addScore(guestscoreElement, 3);
      } else if (target.classList.contains('guest-reset-button')) {
        resetScore(guestscoreElement)
      }
    });
  });
  