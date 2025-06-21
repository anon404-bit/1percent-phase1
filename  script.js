document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("submitBtn");
  const input = document.getElementById("userInput");

  btn.addEventListener("click", () => {
    const value = input.value.replace(/\s+/g, '').toLowerCase();
    const correct = "welcometo1%";

    if (value === correct) {
      // Redirect to result page with success param
      window.location.href = "result.html?status=success";
    } else {
      window.location.href = "result.html?status=failure";
    }
  });
});
