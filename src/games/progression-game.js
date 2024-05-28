import * as game_handler from "../index.js";

function generate_progession(startNumber, step, ammount) {
  let progression = [startNumber];
  for (var i = 0; i < ammount - 1; i++) {
    startNumber = startNumber + step;
    progression.push(startNumber);
  }

  return progression;
}

function generate_message(progression) {
  var message = "";
  for (var i = 0; i < progression.length; i++) {
    message = message + " " + progression[i].toString();
  }
  return message;
}

function prepare_question() {
  var progression = [];
  var startNumber,
    step,
    correctAnswer,
    progressionLength = 0;

  startNumber = game_handler.generate_instance(1, 100);
  progressionLength = game_handler.generate_instance(1, 20, 5);
  step = game_handler.generate_instance(1, 50);
  progression = generate_progession(
    Number(startNumber),
    Number(step),
    progressionLength,
  );

  var indexToOmit = game_handler.generate_instance(1, progressionLength);
  correctAnswer = progression[indexToOmit - 1];
  progression[indexToOmit - 1] = "..";
  let message = generate_message(progression);

  return [message, correctAnswer];
}

export function progession_game(name) {
  console.log("What number is missing in the progression?");

  var answer = "";
  var correctAnswers = 0;
  var message = "";
  var correctAnswer = 0;

  for (var i = 0; i < 3; i++) {
    var data = prepare_question();
    message = data[0];
    correctAnswer = data[1];

    answer = game_handler.get_answer(message);
    correctAnswers = game_handler.process_answer(
      answer,
      correctAnswer.toString(),
      correctAnswers,
      name,
    );

    if (i == correctAnswers) {
      return;
    }
  }
  game_handler.finish_round(name);
}
