// Handle login form submission
const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const studentId = document.getElementById("student-id").value.trim();

    if (!studentId || studentId.length < 4) {
      alert("Please enter a valid Student ID (minimum 4 characters).")
      return;
    }

    // Simulate redirect to vote page (to be handled by backend in production)
    alert(`Welcome! ID ${studentId} verified. Proceeding to vote...`);
    // Example redirect placeholder:
    // window.location.href = `/vote-page-for-student.html?id=${studentId}`
  });
}