import readlineSync from "readline-sync";

function start_round() {
  return Math.floor(Math.random() * 999 + 1);
}

function get_answer(number) {
  console.log("Question: " + number.toString());
  return readlineSync.question("Your answer: ");
}

function process_answer(answer, correctAnswer, correctAnswers, name) {
  if (correctAnswer == answer) {
    console.log("Correct!");
    correctAnswers++;
  } else {
    console.log(
      '"' +
        answer +
        '"' +
        " is wrong answer ;(. Correct answer was '" +
        correctAnswer +
        "'",
    );
    console.log("Let's try again, " + name + "!");
  }
  return correctAnswers;
}

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
    number = start_round(number);
    answer = get_answer(number);
    var correctAnswer = correct[number % 2 == 0];
    correctAnswers = process_answer(
      answer,
      correctAnswer,
      correctAnswers,
      name,
    );
    if (i == correctAnswers) {
      break;
    }
  }
  if (correctAnswers == 3) {
    console.log("Congratulations, " + name + "!");
  }
}
