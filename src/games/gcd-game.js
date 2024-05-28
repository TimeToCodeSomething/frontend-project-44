import * as game_handler from "../index.js";

function gcd(number1, number2) {
  if (number2 == 0) {
    return number1;
  } else {
    return gcd(number2, number1 % number2);
  }
}

export function gcd_game(name) {
  console.log("Find the greatest common divisor of given numbers.");
  var correctAnswers = 0;
  var answer = "";
  var number1,
    number2 = 0;
  for (var i = 0; i < 3; i++) {
    number1 = game_handler.generate_instance(100);
    number2 = game_handler.generate_instance(100);
    answer = game_handler.get_answer(
      number1.toString() + " " + number2.toString(),
    );
    correctAnswers = game_handler.process_answer(
      answer,
      gcd(number1, number2).toString(),
      correctAnswers,
      name,
    );
    if (correctAnswers == i) {
      return;
    }
  }
  game_handler.finish_round(name);
}
