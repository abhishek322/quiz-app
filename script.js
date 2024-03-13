console.log("Quiz app");

const quizData = [
  {
    question: "What is the name of the weak zone of the earth's crust?",
    answers: [
      { text: "Seismic", isCorrect: true },
      { text: "Cosmic", isCorrect: false },
      { text: "Formic", isCorrect: false },
      { text: "Anaemic", isCorrect: false },
    ],
  },
  {
    question: "Where was India's first national Museum opened?",
    answers: [
      { text: "Delhi", isCorrect: false },
      { text: "Hyderabad", isCorrect: false },
      { text: "Rajasthan", isCorrect: false },
      { text: "Mumbai", isCorrect: true },
    ],
  },
  {
    question:
      "In 2019, Which popular singer was awarded the Bharat Ratna award?",
    answers: [
      { text: "Lata Mangeshkar", isCorrect: false },
      { text: "Asha Bhosle", isCorrect: false },
      { text: "Bhupen Hazarika", isCorrect: true },
      { text: "Manna Dey", isCorrect: false },
    ],
  },
  {
    question: "When was Pravasi Bhartiya Divas held in Varanasi?",
    answers: [
      { text: "2017", isCorrect: false },
      { text: "2015", isCorrect: false },
      { text: "2019", isCorrect: true },
      { text: "2020", isCorrect: false },
    ],
  },
  {
    question: "Vijay Singh (golf player) is from which country?",
    answers: [
      { text: "UK", isCorrect: false },
      { text: "USA", isCorrect: false },
      { text: "India", isCorrect: true },
      { text: "Fiji", isCorrect: false },
    ],
  },
  {
    question:
      "The world's nation 5G mobile network was launched by which country?",
    answers: [
      { text: "Japan", isCorrect: false },
      { text: "Asia", isCorrect: false },
      { text: "South Korea", isCorrect: true },
      { text: "Malaysia", isCorrect: false },
    ],
  },
  {
    question: "The green planet in the solar system is?",
    answers: [
      { text: "Mars", isCorrect: false },
      { text: "Uranus", isCorrect: true },
      { text: "Venus", isCorrect: false },
      { text: "Earth", isCorrect: false },
    ],
  },
  {
    question: "Which of these is the plant important in sericulture?",
    answers: [
      { text: "Cassia", isCorrect: false },
      { text: "Legumes", isCorrect: false },
      { text: "Pea", isCorrect: false },
      { text: "Mulberry", isCorrect: true },
    ],
  },
  {
    question: "Which of these is the small-scale industry in India?",
    answers: [
      { text: "Jute industry", isCorrect: false },
      { text: "Paper Industry", isCorrect: false },
      { text: "Textile Industry", isCorrect: false },
      { text: "Handloom Industry", isCorrect: true },
    ],
  },
  {
    question: "The largest public sector undertaking in the country is?",
    answers: [
      { text: "Railways", isCorrect: true },
      { text: "Airways", isCorrect: false },
      { text: "Roadways", isCorrect: false },
      { text: "Iron and Steel Plants", isCorrect: false },
    ],
  },
];



const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

startQuiz();

function showQuestion() {
    resetState();
    let currentQuestion = quizData[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(ans => {
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(ans.isCorrect){
            button.dataset.correct = ans.isCorrect;
        }
        button.addEventListener("click", selectAnswer);
    })

}


function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${quizData.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < quizData.length){
        showQuestion();
    } else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < quizData.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})














