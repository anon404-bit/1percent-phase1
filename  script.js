function checkAnswer() {
  const input = document.getElementById("userInput").value.trim();
  const feedback = document.getElementById("feedback");

  const correctAnswer = "Welcome to1%";

  if (input === correctAnswer) {
    feedback.innerHTML = "✅ Access Granted. You may proceed to Phase 2.";
    feedback.style.color = "lime";
  } else {
    feedback.innerHTML = "❌ Access Denied. Decode better.";
    feedback.style.color = "red";
  }
}
