var state = "start";

var wholeThing = document.querySelector("body")
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var endEl = document.querySelector("#end");
var startButton = document.querySelector("#start button");
var myTitle = document.querySelector("#quiz #title");
var timeEl = document.querySelector("#time")
var contentEl = document.querySelector("#content")
var choicesEl = document.querySelector("#choices")
var choiceButton = document.querySelector(".solid")
var formEl = document.querySelector("#myForm")

var currentQuestion = 0;
var correctAnswers = 0;

startEl.style.textAlign = "center"; 
quizEl.style.textAlign = "center"; 
endEl.style.textAlign = "center"; 
wholeThing.style.fontFamily = "sans-serif"
wholeThing.style.backgroundColor = "#777777"
wholeThing.style.marginTop = "200px"



// creating an array for the questions and using our numbers questions and answers
var questions = [
    {
        question: "What is javascript?",
        answer: 0,
        options: [
            "A scripting language",
            "A spoken language",
            "A super language",
            "None of the above"
        ]
    },
    {
        question: "What does a javascript file end in?",
        answer: 1,
        options: [
            ".jk",
            ".js",
            ".jv",
            ".jt"
        ]
    },
    {
        question: "What does API stand for?",
        answer: 2,
        options: [
            "Application Process Intervew",
            "Application Performance Indicator",
            "Application Programming Interface",
            "Application Pre Internet",
        ]
    }
]




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
function clickButton() {
    answerCheck();
    currentQuestion++;
    console.log(currentQuestion)
    console.log(correctAnswers)
    displayQuestion();
    choicesEl.innerHTML = ""; // clears out the choices to allow for new ones to populate
    displayOptions();

}

function answerCheck(){
    var newQuestion = questions[currentQuestion];
    if(newQuestion === questions.answer){
        correctAnswers++;
    }
    
    
}



// displaying the question on the page function
function displayQuestion() {
    if (currentQuestion < 3) {
        var eachQuestion = questions[currentQuestion].question
        contentEl.textContent = eachQuestion

    } else { // when the current question is 3 or more we will display the end state since there are no more questions
        state = "end"
        displayState();
    }
}

    // displaying each option(answer) with a for loop
function displayOptions() {
    if (currentQuestion < 3) {
        var eachOption = questions[currentQuestion].options
        for (var i = 0; i < eachOption.length; i++) {
            var doc = document.createElement("button")
            doc.setAttribute("class", "solid")
            doc.onclick = clickButton;
            doc.textContent = eachOption[i]
            choicesEl.appendChild(doc)
            
        }
        } else {    // turned this into an if else statement to account for current questions and the state we're in
        state = "end"
        displayState();
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
            state = "end"
            displayState();
            alert("Time ran out, enter your name.")
            clearInterval(timerInterval);
        }
        else if (state === "end") { // if they finish the quiz before time is up it takes them to the ending page for entering their name
            clearInterval(timerInterval);
        }

    }, 1000)



});


myTitle.addEventListener("click", function () {
    state = "end";
    displayState();
});

init();


