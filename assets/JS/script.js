const question = document.querySelector("#question");
const answer1 = document.querySelector("#first");
const answer2 = document.querySelector("#second");
const answer3 = document.querySelector("#third");
const answer4 = document.querySelector("#fourth");
const start = document.querySelector('#start');
const countDown = document.querySelector('#countDown');
const display = document.querySelectorAll('.display');
let i = 0;
let time = 60;
let score = 0;

const questions = [
    'What is the lowest rank in Overwatch 2?',
    'Who was the first new hero added to Overwatch?',
    'How many hero catergories are there in Overwatch 2?',
    'What year was Overwatch 2 released?',
    'What was the name of the meta the dominated the Overwatch League after the release of Brigitte?',
    'Who was the first now tank added to Overwatch?',
];
const answers = [
    ['Bronze', 'Silver', 'Carbon', 'Wood'],
    ['Sombra', 'Doomfist', 'Anna', 'Orisa'],
    ['1', '2', '3', '4'],
    ['2020', '2021', '2022', '2023'],
    ['Rein', 'Goats', 'Dive', 'Double Shield'],
    ['Mauga', 'Doomfist', 'Orisa', 'Ramattra'],
];
const answerKey = [
    [true, false, false, false],
    [false, false, true, false],
    [false, false, true, false],
    [false, false, false, true],
    [false, true, false, false],
    [false, false, true, false],
];

//start button
start.addEventListener('click', function () {
    start.setAttribute('style', 'display: none;');
    
    answer1.addEventListener('click', function (event) {
        event.stopPropagation();
        if (answerKey[i][0] === true) {
            correct();
        } else {
            incorrect();
        };
    });
    answer2.addEventListener('click', function (event) {
        event.stopPropagation();
        if (answerKey[i][1] === true) {
            correct();
        } else {
            incorrect();
        };
    });
    answer3.addEventListener('click', function (event) {
        event.stopPropagation();
        if (answerKey[i][2] === true) {
            correct();
        } else {
            incorrect();
        };
    });
    answer4.addEventListener('click', function (event) {
        event.stopPropagation();
        if (answerKey[i][3] === true) {
            correct();
        } else {
            incorrect()
        };
    });

    udpdatedDisplay();

    timer();
});

//timer
function timer() {
    let counter = 0
    var timerInterval = setInterval(function () {
        let timeLeft = time - counter
        countDown.textContent = 'Time left = ' + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
            return;
        };
        counter++;
    }, 1000);
};

function endGame() {
    display.forEach(element => {
        element.setAttribute('style', 'display: none;');
    });

};

//if the wrong answer is picked the timer goes down
function incorrect() {
    time = time - 5;
    i++;
    if (i >= questions.length) {
        endGame();
        return;
    } else {
        udpdatedDisplay();
        return;
    };
};

//if the right answer is picked the score goes up
function correct() {
    score++;
    i++;
    console.log(score);
    if (i >= questions.length) {
        endGame();
        return;
    } else {
        udpdatedDisplay();
        return;
    };
};

//quiz display
//display options for the user to pick
function udpdatedDisplay() {
    question.textContent = questions[i];
    answer1.textContent = answers[i][0];
    question.textContent = questions[i];
    answer2.textContent = answers[i][1];
    question.textContent = questions[i];
    answer3.textContent = answers[i][2];
    question.textContent = questions[i];
    answer4.textContent = answers[i][3];
};

function reset() {
    let i = 0;
    let time = 60;
    let score = 0;
    display.forEach(element => {
        element.setAttribute('style', 'display: shown;');
    });
};

//save scores with initials