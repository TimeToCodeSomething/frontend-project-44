import readlineSync from "readline-sync";

export function process_answer(answer, correctAnswer, correctAnswers, name) {
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

export function get_answer(message) {
  console.log("Question: " + message);
  return readlineSync.question("Your answer: ");
}

export function generate_instance(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}

export function finish_round(name) {
  console.log("Congratulations, " + name + "!");
}
