import readlineSync from "readline-sync";

export function odd_or_even(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  var correct = {
    true: "yes",
    false: "no",
  };
  var number = 0;
  var correctAnswers = 0;
  for (var i = 0; i < 3; i++) {
    number = Math.floor(Math.random() * 999 + 1);
    console.log("Question: " + number.toString());
    const answer = readlineSync.question("Your answer: ");
    var correctAnswer = correct[(number % 2 == 0).toString()];

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
      break;
    }
  }
  if (correctAnswers == 3) {
    console.log("Congratulations, " + name + "!");
  }
}
