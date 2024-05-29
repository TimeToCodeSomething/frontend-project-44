import * as game_handler from '../index.js';

function isPrime(number) {
  var correct = {
    true: 'yes',
    false: 'no',
  };

  const prime_number_list = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
  ];
  return correct[prime_number_list.includes(number)];
}

export default function primeNumberGame(name) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  var number = 0;
  var correctAnswers = 0;
  var correctAnswer = 0;
  var answer = '';

  for (var i = 0; i < 3; i = i + 1) {
    number = game_handler.generateInstance(1, 200, 1);
    correctAnswer = isPrime(Number(number));
    answer = game_handler.getAnswer(number.toString());
    correctAnswers = correctAnswers + game_handler.processAnswer(
      answer,
      correctAnswer,
      name,
    );
    if (correctAnswers === i) {
      return;
    }
  }
  game_handler.finishRound(name);
}
