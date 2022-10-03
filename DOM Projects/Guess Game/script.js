'use strict';

//secret number generator

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let hightscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //no input
  if (!guess) {
    displayMessage('❌ Please enter a number');
  }

  // correct number
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct number 🎉');

    if (score > hightscore) {
      hightscore = score;
      document.querySelector('.highscore').textContent = hightscore;
    }

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  }

  //if wrong
  else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(
        guess > secretNumber ? '↗↗ High number ↗↗' : '↘↘ Low number ↘↘'
      );

      document.querySelector('.score').textContent = --score;
    } else {
      displayMessage('💥 You lost the game');
    }
  }
});

//   //too high guess
//   else if (guess > secretNumber) {
//     document.querySelector('.message').textContent = '↗↗ High number ↗↗';
//     if (score > 0) {
//       document.querySelector('.score').textContent = --score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game';
//     }
//   }

//   //to low guess
//   else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = '↘↘ Low number ↘↘';
//     if (score > 0) {
//       document.querySelector('.score').textContent = --score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game';
//       document.querySelector('body').style.backgroundColor = '#D61C4E';
//     }
//   }
//

//reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start guessing ...');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
