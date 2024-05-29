import * as gameHandler from '../index.js';

function generateMessage(numbers, operation) {
  const operations = {
    1: '+',
    2: '-',
    3: '*',
  };
  const message = `${numbers[0]} ${operations[operation]} ${numbers[1]}`;

  return message;
}

function calculateAnswer(numbers, operation) {
  let correctAnswer = 0;
  if (operation[0] === 1) {
    correctAnswer = Number(numbers[0]) + Number(numbers[1]);
  } else if (operation[0] === 2) {
    correctAnswer = Number(numbers[0]) - Number(numbers[1]);
  } else if (operation[0] === 3) {
    correctAnswer = Number(numbers[0]) * Number(numbers[1]);
  }

  return correctAnswer;
}

export default function calculator(name) {
  console.log('What is the result of the expression?');

  let numbers = [];
  let operation = '';
  let answer = '';
  let correctAnswers = 0;

  for (let i = 0; i < 3; i += 1) {
    numbers = gameHandler.generateInstance(2, 100);
    operation = gameHandler.generateInstance(1, 4);
    const message = generateMessage(numbers, operation);

    answer = gameHandler.getAnswer(message);
    correctAnswers += gameHandler.processAnswer(
      answer,
      calculateAnswer(numbers, operation).toString(),
      name,
    );
    if (correctAnswers === i) {
      return;
    }
  }
  gameHandler.finishRound(name);
}
