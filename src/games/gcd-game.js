import * as gameHandler from '../index.js';

function gcd(number1, number2) {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
}

export default function gcdGame(name) {
  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswers = 0;
  let answer = '';
  let numbers = [];
  for (let i = 0; i < 3; i += 1) {
    numbers = gameHandler.generateInstance(2, 100);
    answer = gameHandler.getAnswer(`${numbers[0].toString()} ${numbers[1].toString()}`);
    correctAnswers += gameHandler.processAnswer(
      answer,
      gcd(numbers[0], numbers[1]).toString(),
      name,
    );
    if (correctAnswers === i) {
      return;
    }
  }
  gameHandler.finishRound(name);
}
