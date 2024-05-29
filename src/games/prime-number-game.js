import * as gameHandler from '../index.js';

function isPrime(number) {
  const correct = {
    true: 'yes',
    false: 'no',
  };

  const primeNumberList = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
  ];
  return correct[primeNumberList.includes(number)];
}

export default function primeNumberGame(name) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let number = 0;
  let correctAnswers = 0;
  let correctAnswer = 0;
  let answer = '';

  for (let i = 0; i < 3; i += 1) {
    number = gameHandler.generateInstance(1, 200, 1);
    correctAnswer = isPrime(Number(number));
    answer = gameHandler.getAnswer(number.toString());
    correctAnswers += gameHandler.processAnswer(
      answer,
      correctAnswer,
      name,
    );
    if (correctAnswers === i) {
      return;
    }
  }
  gameHandler.finishRound(name);
}
