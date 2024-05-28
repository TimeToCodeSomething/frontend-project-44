import * as game_handler from "../index.js";

function generate_progression(start, step, length){
    var progression = [start];
    for(var i = 0; i < 3; i++){
        start = start + step;
        progression.push(start);
    }

    return progression;
}

function generate_message(progression){
    var message = "";
    for (var i = 0; i < progression.length; i++){
        message = message + " " + progression[i];
    }

    return message;
}

function prepare_task(){
    var progression = [];
    var correctAnswer = 0;
    var startNumber = 0;
    var step = 0;
    var progressionLength = 0;

    startNumber = game_handler.generate_instance(1, 100);
    progressionLength = game_handler.generate_instance(1, 20, 5);
    step = game_handler.generate_instance(1, 50);
    progression = generate_progression(startNumber, step, progressionLength);

    var indexToOmit = game_handler.generate_instance(1, progressionLength);
    correctAnswer = progression[indexToOmit - 1]
    progression[indexToOmit - 1] = '..';

    var message = generate_message(progression);


    return [message, correctAnswer]
}

export function progression_game(name){
    var correctAnswers = 0;
    var answer = '';

    for (var i = 0; i < 3; i++){
        var data = prepare_task();

        answer = game_handler.get_answer(data[0]);
        correctAnswers = game_handler.process_answer(answer, data[1], correctAnswers, name);

        if (i == correctAnswers){
            return;
        }
    }

    game_handler.finish_round(name);
}