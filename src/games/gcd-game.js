import * as game_handler from '../index.js';

function gcd(number1, number2) {
  if (number2 === 0) {
    return number1;
  } else {
    return gcd(number2, number1 % number2);
  }
}

export default function gcdGame(name) {
  console.log('Find the greatest common divisor of given numbers.');
  var correctAnswers = 0;
  var answer = '';
  var numbers = [];
  for (var i = 0; i < 3; i++) {
    numbers = game_handler.generateInstance(2, 100);
    answer = game_handler.getAnswer(`${numbers[0].toString()} ${numbers[1].toString()}`);
    correctAnswers = correctAnswers + game_handler.processAnswer(
      answer,
      gcd(numbers[0], numbers[1]).toString(),
      name,
    );
    if (correctAnswers === i) {
      return;
    }
  }
  game_handler.finishRound(name);
}
