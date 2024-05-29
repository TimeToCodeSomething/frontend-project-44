import * as gameHandler from '../index.js';

export default function oddOrEven(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const correct = {
    true: 'yes',
    false: 'no',
  };
  let number = 0;
  let correctAnswers = 0;
  let answer = '';
  for (let i = 0; i < 3; i += 1) {
    number = gameHandler.generateInstance(1, 1000);
    answer = gameHandler.getAnswer(number.toString());
    const correctAnswer = correct[number % 2 === 0];
    correctAnswers += gameHandler.processAnswer(
      answer,
      correctAnswer,
      name,
    );
    if (i === correctAnswers) {
      return;
    }
  }
  gameHandler.finishRound(name);
}
