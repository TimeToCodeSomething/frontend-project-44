import * as game_handler from '../index.js';

export default function oddOrEven(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  var correct = {
    true: 'yes',
    false: 'no',
  };
  var number = 0;
  var correctAnswers = 0;
  var answer = '';
  for (var i = 0; i < 3; i = i + 1) {
    number = game_handler.generateInstance(1, 1000);
    answer = game_handler.getAnswer(number.toString());
    var correctAnswer = correct[number % 2 == 0];
    correctAnswers = correctAnswers + game_handler.processAnswer(
      answer,
      correctAnswer,
      name,
    );
    if (i === correctAnswers) {
      return;
    }
  }
  game_handler.finishRound(name);
}
