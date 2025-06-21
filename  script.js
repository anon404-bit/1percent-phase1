function checkAnswer() {
  const input = document.getElementById("userInput").value.trim();
  const feedback = document.getElementById("feedback");

  const correctAnswer = "Welcome to1%";

  if (input === correctAnswer) {
    feedback.innerHTML = "🎉 Congratulations. You have successfully completed Phase 1. Instructions for Phase 2 will follow shortly.";
    feedback.style.color = "white";
  } else {
    feedback.innerHTML = "❌ Access Denied. Decode better.";
    feedback.style.color = "red";
  }
}
