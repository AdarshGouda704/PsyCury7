// Array of questions and answers
const questions = [
  { question: "Write a program to demonstrate 87971141011041111171151017311011810111011611111412177971109710310110910111011683121115116101109.", answer: "WarehouseInventoryManagementSystem" },
];

let correctAnswer = ""; // Variable to store the correct answer

// Function to load a random question
function loadRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length); // Random index
  const selectedQuestion = questions[randomIndex];

  // Update the question and set the correct answer
  document.getElementById("question").textContent = selectedQuestion.question;
  correctAnswer = selectedQuestion.answer;
}

// Function to check the answer
function checkAnswer() {
  const userAnswer = document.getElementById("answer-box").value.trim();
  const submitBtn = document.getElementById("submit-btn");
  const feedback = document.getElementById("feedback");

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    feedback.textContent = "Correct! You can now submit your answer.";
    feedback.style.color = "green"; // Green text for correct answers
    submitBtn.disabled = false;
  } else {
    feedback.textContent = "Incorrect answer. Please try again.";
    feedback.style.color = "red"; // Red text for incorrect answers
    submitBtn.disabled = true;
  }
}

// Function to handle answer submission
function submitAnswer() {
  window.location.href = "https://www.programiz.com/c-programming/online-compiler"; // Redirect to the next page
}

// Dark mode toggle
function toggleDarkMode() {
  const themeToggle = document.getElementById("theme-toggle");
  document.body.classList.toggle("dark-mode");

  const icon = themeToggle.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

// Initialize the page with a random question
document.addEventListener("DOMContentLoaded", () => {
  loadRandomQuestion();
  document.getElementById("theme-toggle").addEventListener("click", toggleDarkMode);
});
