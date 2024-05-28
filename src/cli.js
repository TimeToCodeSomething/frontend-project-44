import readlineSync from 'readline-sync';

export function greet() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  let message = 'Hello, ' + name + '!'
  console.log(message);
  return name;
}
