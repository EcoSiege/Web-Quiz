var question = document.querySelector("#theme-switcher");
var answer1 = document.querySelector("#1");
var answer2 = document.querySelector("#2");
var answer3 = document.querySelector("#3");
var answer4 = document.querySelector("#4");
var start = document.querySelector('#start');
var timeLeft = 60;

//start button
start.addEventListener('click', function(){
//quiz display
    //change after the  quiz is started and after each question is answered 
    //display options for the user to pick
    //if the right answer is picked the score goes up
    //if the wrong answer is piacke the timer goes down

},
//timer
function timer(){
    var timerInterval = setInterval(function() {
        timeLeft--;

        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
          }
}, 1000);
});

//save scores with initials
//make an array for the questions that can be looped through to display each question and its answers
    