function checkAnswer (){
    const correctAnswer = "4";
    const selectedOption = document.querySelector ('input[name="quiz"]:checked')

    if (!selectedOption) return;

    const userAnswer = selectedOption.value


    if (correctAnswer === userAnswer ){
        feedback.textContent = "Correct! Well done";
        feedback.style.color = "#28a745";
    }
    else{
        feedback.textContent="That's incorrect. Try again!"
        feedback.style.color = "#dc3545";
    }
}
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);