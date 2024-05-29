import * as game_handler from '../index.js';

function generateProgression(start, step, length){
    var progression = [start];
    for(var i = 0; i < length; i = i + 1){
        start = start + step;
        progression.push(start);
    }

    return progression;
}

function generateMessage(progression){
    var message = progression[0].toString();
    for (var i = 1; i < progression.length; i = i + 1){
        message = `${message} ${progression[i]}`;
    }

    return message
}

function prepareTask(){
    var progression = [];
    var correctAnswer = 0;
    var startNumber = 0;
    var step = 0;
    var progressionLength = 0;

    startNumber = game_handler.generateInstance(1, 100);
    progressionLength = game_handler.generateInstance(1, 20, 6);
    step = game_handler.generateInstance(1, 50);
    progression = generateProgression(Number(startNumber), Number(step), progressionLength);

    var indexToOmit = game_handler.generateInstance(1, progressionLength);
    correctAnswer = progression[indexToOmit - 1]
    progression[indexToOmit - 1] = '..';

    var message = generateMessage(progression);

    return [message, correctAnswer]
}

export default function progressionGame(name){
    console.log('What number is missing in the progression?')
    var correctAnswers = 0;
    var answer = '';

    for (var i = 0; i < 3; i = i + 1){
        var data = prepareTask();

        answer = game_handler.getAnswer(data[0]);
        correctAnswers = correctAnswers + game_handler.processAnswer(answer, data[1].toString(), name);

        if (i === correctAnswers){
            return;
        }
    }

    game_handler.finishRound(name);
}