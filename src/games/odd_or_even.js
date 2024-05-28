import * as game_handler from "../index.js";

export function odd_or_even(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  var correct = {
    true: "yes",
    false: "no",
  };
  var number = 0;
  var correctAnswers = 0;
  var answer = "";
  for (var i = 0; i < 3; i++) {
    number = game_handler.generate_instance(1000);
    answer = game_handler.get_answer(number.toString());
    var correctAnswer = correct[number % 2 == 0];
    correctAnswers = game_handler.process_answer(
      answer,
      correctAnswer,
      correctAnswers,
      name,
    );
    if (i == correctAnswers) {
      return;
    }
  }
  game_handler.finish_round(name);
}
