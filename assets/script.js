const quizData = [
    {
        question: "which language runs in a web browser?",
        a:"Java",
        b: "c",
        c: "python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a:"cant stand school",
        b: "c",
        c: "Cascading Style Sheets",
        d: "javascript",
        correct: "c",
    },
    {
        question: "What HTML stand for?",
        a:"Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Hi Tom Machine Land",
        correct: "a",
    },
    {
        question: "What year was Javascript launched?",
        a:"1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const question = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById ("d_text")
const submitBtn = document.getElementById("submit")


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
     
    question.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl =>answerEl.checked = false)
}

function getSelected() {
   let answer
   answerEls.forEach(answerEl => {
      if(answerEl.checked) {
        answer = answerEl.id
      }
   })
 return answer
}

submitBtn.addEventListener("click" , () => {
 const answer = getSelected()
 if(answer) {
    if( answer === quizData[currentQuiz].correct) {
         score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
        loadQuiz()
    } else {
        container.innerHTML = `
        <h1>You answered ${score}/${quizData.length} questions correctly</h1>
        <button onclick="location.reload()">Reload</button>
        `
    }
    
 }
})

let total_seconds = 60*1;
let c_seconds = parseInt(total_seconds%60);

function checkTime() {
    document.getElementById("timer-placeholder").innerHTML
    ="time left: " + c_seconds + "seconds";
    
    if(total_seconds <=0){
        setTimeout("timer()", 1);
    } else{
        total_seconds = total_seconds -1;
        c_seconds = parseInt(total_seconds%60);
        setTimeout("checkTime()" , 1000);
    }
}
setTimeout("checkTime()" ,1000);