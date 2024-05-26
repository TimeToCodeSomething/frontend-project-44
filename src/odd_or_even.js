import readlineSync from "readline-sync";

export function odd_or_even(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  var number = 0;
  var correctAnswers = 0;
  for (var i = 0; i < 3; i++) {
    number = Math.floor(Math.random() * 999 + 1);
    console.log("Question: " + number.toString());
    const answer = readlineSync.question("Your answer: ");
    var is_odd = number % 2 == 0;

    if ((is_odd && answer == "yes") || (!is_odd && answer == "no")) {
      console.log("Correct!");
      correctAnswers++;
    } else {
      if (is_odd) {
        console.log(
          "'" +
            answer.toString() +
            "'" +
            " is wrong answer ;(. Correct answer was 'yes'.",
        );
      } else {
        console.log(
          "'" +
            answer.toString() +
            "'" +
            " is wrong answer ;(. Correct answer was 'no'.",
        );
      }
      break;
    }
  }
  if (correctAnswers == 3) {
    console.log("Congratulations, " + name + "!");
  } else {
    console.log("Let's try again, " + name + "!");
  }
}
