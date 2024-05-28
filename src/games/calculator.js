import * as game_handler from "../index.js";

export function calculator(name) {
  console.log("What is the result of the expression?");
  var operations = {
    1: "+",
    2: "-",
    3: "*",
  };
  var numbers = [];
  var operation = "";
  var answer = "";
  var correctAnswers = 0;

  for (var i = 0; i < 3; i++) {
    numbers = game_handler.generate_instance(2, 100);
    operation = game_handler.generate_instance(1, 4);
    var message =
      numbers[0].toString() +
      " " +
      operations[operation] +
      " " +
      numbers[1].toString();
    answer = game_handler.get_answer(message);
    correctAnswers = game_handler.process_answer(
      answer,
      eval(message).toString(),
      correctAnswers,
      name,
    );
    if (correctAnswers == i) {
      return;
    }
  }
  game_handler.finish_round(name);
}
