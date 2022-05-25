var state = "start";


var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startButton = document.querySelector("#start button");
var myTitle = document.querySelector("#quiz #title");


// creating an array for the questions and using our numbers questions and answers
var questions = [
    {
        num: 1,
        question: "What is javascript?",
        answer: "A scripting language",
        options: [
            "A scripting language",
            "A spoken language",
            "A super language",
            "None of the above"
        ]
    },
    {
        num: 2,
        question: "What does a javascript file end in?",
        answer: ".js",
        options: [
            ".jk",
            ".js",
            ".jv",
            ".jt"
        ]
    },
    {   num: 3,
        question: "What does API stand for?",
        answer: "Application Programming Interface",
        options: [
            "Application Process Intervew",
            "Application Performance Indicator",
            "Application Programming Interface",
            "Application Pre Internet",
        ]   
    }
]

console.log(questions[0, 1])


// function to display which state of the quiz you are on. Will always start on 'start'
function displayState() {
    if (state === "start") {
        startEl.style.display = "block" // setting the starting screen to only show our 'start' section
        quizEl.style.display = "none"
        endEl.style.display = "none"
    }

    if (state === "quiz") {
        startEl.style.display = "none"
        quizEl.style.display = "block"
        endEl.style.display = "none"
    }

    if (state === "end") {
        startEl.style.display = "none"
        quizEl.style.display = "none"
        endEl.style.display = "block"
    }

}

// initializer function
function init() {
    displayState();
};


function countdown(){
    var secondsLeft = 20;
    setInterval(function(){
        secondsLeft --;
        if (counter >= 0){
            var time = document.querySelector("count");
            time.innerHTML = secondsLeft;
        }
        if (count === 0){
            alert("You ran out of time.");
            clearInterval(secondsLeft);
        }
    }, 1000);
}

// button for begin quiz.  If it's clicked we change our state to 'quiz' to begin the quiz then run our display state function.
startButton.addEventListener("click", function () {
    state = "quiz";
    countdown();
    displayState();
});

// 
myTitle.addEventListener("click", function () {
    state = "end";
    displayState();
});

init();


