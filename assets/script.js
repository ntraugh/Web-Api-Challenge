var state = "start";


var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startButton = document.querySelector("#start button");
var myTitle = document.querySelector("#quiz #title");
var timeEl = document.querySelector("#time")
var contentEl = document.querySelector("#content")
var choicesEl = document.querySelector("#choices")
var choiceButton = document.querySelector(".solid")

var currentQuestion = 0;
var correctAnswers = 0;
var quizDone = false;




// creating an array for the questions and using our numbers questions and answers
var questions = [
    {
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
        question: "What does a javascript file end in?",
        answer: ".js",
        options: [
            ".jk",
            ".js",
            ".jv",
            ".jt"
        ]
    },
    {
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

console.log(questions[0].question) // to get the name of the question, options, and answer


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

var secondsLeft = 20

// function to display time left on the screen
function displayTime() {
    timeEl.textContent = secondsLeft + " seconds left.";
}

// function to click on an answer and move to the next one
function clickButton(){
    currentQuestion++;
    console.log(currentQuestion)
    displayQuestion();
    choicesEl.innerHTML = ""; // clears out the choices to allow for new ones to populate
    displayOptions();
}

// selecting content for our id
function displayQuestion() {
    var eachQuestion = questions[currentQuestion].question
    contentEl.textContent = eachQuestion

}

function displayOptions() {
    var eachOption = questions[currentQuestion].options
    for (var i = 0; i < eachOption.length; i++) {
        var doc = document.createElement("button")
        doc.setAttribute("class", "solid")
        doc.onclick = clickButton;
        doc.textContent = eachOption[i]
        choicesEl.appendChild(doc)
    }

}

// button for begin quiz.  If it's clicked we change our state to 'quiz' to begin the quiz then run our display state function.
startButton.addEventListener("click", function () {
    state = "quiz";
    displayState();
    displayTime();
    displayQuestion();
    displayOptions();
    var timerInterval = setInterval(function () {
        secondsLeft--;
        displayTime();

        if (secondsLeft === 0) {
            alert("Time is up.")
            clearInterval(timerInterval);
        }


    }, 1000)



});


myTitle.addEventListener("click", function () {
    state = "end";
    displayState();
});

init();


