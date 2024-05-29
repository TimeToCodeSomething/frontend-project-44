import readlineSync from 'readline-sync';

export function processAnswer(answer, correctAnswer, name) {
  let isCorrect = 0;
  if (correctAnswer === answer) {
    console.log('Correct!');
    isCorrect = 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}!`);
  }
  return isCorrect;
}

export function getAnswer(message) {
  console.log(`Question: ${message}`);
  return readlineSync.question('Your answer: ');
}

export function generateInstance(ammount, max, min = 1) {
  var numbers = [];
  for (var i = 0; i < ammount; i = i + 1) {
    numbers.push(Math.floor(Math.random() * (max - min) + min));
  }
  return numbers;
}

export function finishRound(name) {
  console.log(`Congratulations, ${name}!`);
}
