function checkAnswer (){
    const correctAnswer = "4";
    const selectedOption = document.querySelector ('input[name="quiz"]:checked')


    const serAnswer = selectedOption.value
    const feedback = document.getElementById('feedback');

    if (correctAnswer === serAnswer ){
        feedback.textContent = "Correct! Well done";
        feedback.style.color = "#28a745";
    }
    else{
        feedback.textContent="That's incorrect. Try again!"
        feedback.style.color = "#dc3545";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);