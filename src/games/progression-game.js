import * as gameHandler from '../index.js';

function generateProgression(start, step, length) {
  let startNumber = start;
  const progression = [startNumber];
  for (let i = 0; i < length; i += 1) {
    startNumber += step;
    progression.push(start);
  }

  return progression;
}

function generateMessage(progression) {
  let message = progression[0].toString();
  for (let i = 1; i < progression.length; i += 1) {
    message = `${message} ${progression[i]}`;
  }

  return message;
}

function prepareTask() {
  let progression = [];
  let correctAnswer = 0;
  let startNumber = 0;
  let step = 0;
  let progressionLength = 0;

  startNumber = gameHandler.generateInstance(1, 100);
  progressionLength = gameHandler.generateInstance(1, 20, 6);
  step = gameHandler.generateInstance(1, 50);
  progression = generateProgression(Number(startNumber), Number(step), progressionLength);

  const indexToOmit = gameHandler.generateInstance(1, progressionLength);
  correctAnswer = progression[indexToOmit - 1];
  progression[indexToOmit - 1] = '..';

  const message = generateMessage(progression);

  return [message, correctAnswer];
}

export default function progressionGame(name) {
  console.log('What number is missing in the progression?');
  let correctAnswers = 0;
  let answer = '';

  for (let i = 0; i < 3; i += 1) {
    const data = prepareTask();

    answer = gameHandler.getAnswer(data[0]);
    correctAnswers += gameHandler.processAnswer(answer, data[1].toString(), name);

    if (i === correctAnswers) {
        return;
    }
  }

  gameHandler.finishRound(name);
}
