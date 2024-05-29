import readlineSync from 'readline-sync';

export function processAnswer(answer, correctAnswer, correctAnswers, name) {
  let isCorrect = 0;
  if (correctAnswer === answer) {
    console.log('Correct!');
    isCorrect = 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name} !`);
  }
  return isCorrect;
}

export function get_answer(message) {
  console.log('Question: ' + message);
  return readlineSync.question('Your answer: ');
}

export function generate_instance(ammount, max, min = 1) {
  var numbers = [];
  for (var i = 0; i < ammount; i++) {
    numbers.push(Math.floor(Math.random() * (max - min) + min));
  }
  return numbers;
}

export function finish_round(name) {
  console.log('Congratulations, ' + name + '!');
}
