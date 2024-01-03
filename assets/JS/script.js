var question = document.querySelector("#question");
var answer1 = document.querySelector("#first");
var answer2 = document.querySelector("#second");
var answer3 = document.querySelector("#third");
var answer4 = document.querySelector("#fourth");
var start = document.querySelector('#start');
var countDown = document.querySelector('#countDown');
var timeLeft = 60;
var score = 0;
const questions = [
    'What is the lowest rank in Overwatch 2?',
    'Who was the first new hero added to Overwatch?',
    'How many hero catergories are there in Overwatch 2?',
    'What year was Overwatch 2 released?',
    'What was the name of the meta the dominated the Overwatch League after the release of Brigitte?'
];
const answers = [
    ['Bronze', 'Silver', 'Carbon', 'Wood'],
    ['Sombra', 'Doomfist', 'Anna', 'Orisa'],
    ['1', '2', '3', '4'],
    ['2020', '2021', '2022', '2023'],
    ['Rein', 'Goats', 'Dive', 'Double Shield']
];
const answerKey = [
    [true, false, false, false],
    [false, false, true, false],
    [false, false, true, false],
    [false, false, false, true],
    [false, true, false, false]
];
console.log(questions[0]);
console.log(answers[0][0]);

//start button
start.addEventListener('click', function() {
    start.setAttribute('style', 'display: none;');
    let i = 0;
    let j = 0;
    //quiz display
    //display options for the user to pick
    question.textContent = questions[i];
    answer1.textContent = answers[i][0];
    question.textContent = questions[i];
    answer2.textContent = answers[i][1];
    question.textContent = questions[i];
    answer3.textContent = answers[i][2];
    question.textContent = questions[i];
    answer4.textContent = answers[i][3];

    visualViewport.addEventListener('click', function (event) {
        if (event.target.matches('button.answer1')) {
            handleButtonClick(event)
            if (answerKey[i][0] === true) {
                //if the right answer is picked the score goes up
                score++, console.log(score);
                i++

            } else {
                //if the wrong answer is picked the timer goes down
                timeLeft--
                i++
            }
        } else if (event.target.matches('button.answer2')) {
            if (answerKey[i][1] === true) {
                score++, console.log(score);
                i++
            } else {
                timeLeft--
                i++
            }
        } else if (event.target.matches('button.answer3')) {
            if (answerKey[i][2] === true) {
                score++, console.log(score);
                i++
            } else {
                timeLeft--
                i++
            }
        } else if (event.target.matches('button.answer4')) {
            if (answerKey[i][3] === true) {
                score++, console.log(score);
                i++
            } else {
                timeLeft--
                i++
            }
        }
    },);





    // answer1.addEventListener('click', function () {
    //     event.stopPropagation();
    //     if (answerKey[i][0] === true) {
    //         //if the right answer is picked the score goes up
    //         score++, console.log(score);
    //         i++
    //     } else {
    //         //if the wrong answer is picked the timer goes down
    //         timeLeft--
    //         i++
    //     }
    // })
    // answer2.textContent = answers[i][1];
    // answer1.addEventListener('click', function () {
    //     event.stopPropagation();
    //     if (answerKey[i][1] === true) {
    //         score++, console.log(score);
    //         i++
    //     } else {
    //         timeLeft--
    //         i++
    //     }
    // })
    // answer3.textContent = answers[i][2];
    // answer1.addEventListener('click', function () {
    //     event.stopPropagation();
    //     if (answerKey[i][2] === true) {
    //         score++, console.log(score);
    //         i++
    //     } else {
    //         timeLeft--
    //         i++
    //     }
    // })
    // answer4.textContent = answers[i][3];
    // answer1.addEventListener('click', function () {
    //     event.stopPropagation();
    //     if (answerKey[i][3] === true) {
    //         score++, console.log(score);
    //         i++
    //     } else {
    //         timeLeft--
    //         i++
    //     }
    // })
    //change after the  quiz is started and after each question is answered 

    timer()
    //timer
    function timer() {
        var timerInterval = setInterval(function () {

            console.log(timeLeft)
            countDown.textContent = 'Time left = ' + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                return
            }
            timeLeft--;
        }, 1000);
    }

}
)

//save scores with initials
//make an array for the questions that can be looped through to display each question and its answers

// visualViewport.addEventListener('click', function(event){
//  if( event.target.matches('button') ){
//     handleButtonClick(event)
//  }
// })
