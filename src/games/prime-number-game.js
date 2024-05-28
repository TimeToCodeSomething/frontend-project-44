import * as game_handler from "../index.js";

function isPrime(number) {
  var correct = {
    true: "yes",
    false: "no",
  };

  const prime_number_list = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
  ];
  return correct[prime_number_list.includes(number)];
}

export function prime_number_game(name) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  var number = 0;
  var correctAnswers = 0;
  var correctAnswer = 0;
  var answer = "";

  for (var i = 0; i < 3; i++) {
    number = game_handler.generate_instance(1, 200, 1);
    correctAnswer = isPrime(Number(number));
    answer = game_handler.get_answer(number.toString());
    correctAnswers = game_handler.process_answer(
      answer,
      correctAnswer,
      correctAnswers,
      name,
    );
    if (correctAnswers == i) {
      return;
    }
  }
  game_handler.finish_round(name);
}
