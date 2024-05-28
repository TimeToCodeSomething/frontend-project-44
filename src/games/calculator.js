import * as game_handler from "../index.js";

export function calculator(name) {
  console.log("What is the result of the expression?");
  var operations = {
    1: "+",
    2: "-",
    3: "*",
  };
  var number1 = 0;
  var number2 = 0;
  var operation = "";
  var answer = "";
  var correctAnswers = 0;

  for (var i = 0; i < 3; i++) {
    number1 = game_handler.generate_instance(100);
    number2 = game_handler.generate_instance(100);
    operation = game_handler.generate_instance(4);
    var message =
      number1.toString() +
      " " +
      operations[operation] +
      " " +
      number2.toString();
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
