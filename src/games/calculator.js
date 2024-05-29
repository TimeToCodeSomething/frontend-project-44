import * as game_handler from '../index.js';

function generateMessage(numbers, operation) {
  var operations = {
    1: '+',
    2: '-',
    3: '*',
  };
  var message = `${numbers[0]} ${operations[operation]} ${numbers[1]}`;

  return message;
}

export default function calculator(name) {
  console.log('What is the result of the expression?');

  var numbers = [];
  var operation = '';
  var answer = '';
  var correctAnswers = 0;

  for (var i = 0; i < 3; i = i + 1) {
    numbers = game_handler.generateInstance(2, 100);
    operation = game_handler.generateInstance(1, 4);
    var message = generateMessage(numbers, operation);

    answer = game_handler.getAnswer(message);
    correctAnswers = correctAnswers + game_handler.processAnswer(
      answer,
      eval(message).toString(),
      name,
    );
    if (correctAnswers === i) {
      return;
    }
  }
  game_handler.finishRound(name);
}
