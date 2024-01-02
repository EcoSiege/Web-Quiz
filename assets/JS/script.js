var question = document.querySelector("#question");
var answer1 = document.querySelector("#first");
var answer2 = document.querySelector("#second");
var answer3 = document.querySelector("#third");
var answer4 = document.querySelector("#fourth");
var start = document.querySelector('#start');
var countDown = document.querySelector('#countDown');
var timeLeft = 60;
var questions = ['What is the lowest rank in Overwatch 2?','Who was the first new hero added to Overwatch?','How many hero catergories are there in Overwatch 2?','What year was Overwatch 2 released?','What was the name of the meta the dominated the Overwatch League after the release of Brigitte?']
var answers = [['Bronze','Silver','Carbon','Wood'],['Sombra','Doomfist','Anna','Orisa'],['1','2','3','4'],['2020','2021','2022','2023'],['Rein','Goats','Dive','Double Shield']]
var answerKey = [[true,false,false,false],[false,false,true,false],[false,false,true,false],[false,false,false,true],[false,true,false,false]]
console.log(questions[0]);
console.log(answers[0][0]);

//start button
start.addEventListener('click', function () {
    start.setAttribute('style','display: none;');
    //quiz display
    question.textContent = questions[0];
    answer1.textContent = answers[0][0];
    question.textContent = questions[0];
    answer2.textContent = answers[0][1];
    question.textContent = questions[0];
    answer3.textContent = answers[0][2];
    question.textContent = questions[0];
    answer4.textContent = answers[0][3];
    //change after the  quiz is started and after each question is answered 
    //display options for the user to pick
    //if the right answer is picked the score goes up
    //if the wrong answer is piacke the timer goes down
    timer()
    //timer
    function timer() {
        var timerInterval = setInterval(function () {
            timeLeft--;
            console.log(timeLeft)
            countDown.textContent = 'Time Remaining = ' + timeLeft;
    
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
            }
        }, 1000);
    }

},
);

//save scores with initials
//make an array for the questions that can be looped through to display each question and its answers
