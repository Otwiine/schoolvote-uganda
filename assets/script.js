const loginForm = document.getElementById("login-form");
const studentIdInput = document.getElementById("student-id");

if (loginForm && studentIdInput) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const studentId = studentIdInput.value.trim();
    const idPattern = /^STU\d{4,}$/i; // Adjust pattern to your actual ID format

    // Validate input format
    if (!studentId) {
      alert("Student ID cannot be empty.");
      studentIdInput.focus();
      return;
    }

    if (!idPattern.test(studentId)) {
      alert("Please enter a valid Student ID (e.g., STU1234).");
      studentIdInput.focus();
      return;
    }

    // Disable button to prevent multiple submissions
    const submitBtn = loginForm.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.textContent = "Verifying...";

    // Simulate verification delay
    setTimeout(() => {
      alert(`Welcome! ID ${studentId} verified. Proceeding to vote...`);

      // Redirect to voting page (adjust URL as needed)
      window.location.href = `/vote.html?id=${encodeURIComponent(studentId)}`;

      // Re-enable button and reset text (optional, if redirect fails)
      submitBtn.disabled = false;
      submitBtn.textContent = "Proceed to Vote";
    }, 1200);
  });
}
