document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("submitBtn");
  const input = document.getElementById("userInput");
  const feedback = document.getElementById("feedback");

  btn.addEventListener("click", () => {
    const value = input.value.trim();
    const correct = "Welcome to1%";

    if (value === correct) {
      feedback.innerHTML = "🎉 Congratulations. You have successfully completed Phase 1. Instructions for Phase 2 will follow shortly.";
      feedback.style.color = "white";
    } else {
      feedback.innerHTML = "❌ Access Denied. Decode better.";
      feedback.style.color = "red";
    }
  });
});
