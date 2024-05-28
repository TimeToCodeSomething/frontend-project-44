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
  var numbers = [];
  for (var i = 0; i < 3; i++) {
    numbers = game_handler.generate_instance(2, 100);
    answer = game_handler.get_answer(
      numbers[0].toString() + " " + numbers[1].toString(),
    );
    correctAnswers = game_handler.process_answer(
      answer,
      gcd(numbers[0], numbers[1]).toString(),
      correctAnswers,
      name,
    );
    if (correctAnswers == i) {
      return;
    }
  }
  game_handler.finish_round(name);
}
