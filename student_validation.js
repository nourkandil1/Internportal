// Student Forms Validation

// Utility function to show alert for missing/invalid fields
function showAlert(message) {
  alert(message);
}

// Signup Form Validation
const studentSignupForm = document.getElementById('studentSignupForm');
if (studentSignupForm) {
  studentSignupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const password = this.password.value.trim();

    if (!name) {
      showAlert('Please enter your full name.');
      return;
    }

    if (!email || !validateEmail(email)) {
      showAlert('Please enter a valid email address.');
      return;
    }

    if (!password || password.length < 6) {
      showAlert('Password must be at least 6 characters long.');
      return;
    }

    // If all validations pass, submit form or proceed
    alert('Student Sign Up form validated successfully (demo). Server integration needed.');
    this.reset();
  });
}

// Login Form Validation
const studentLoginForm = document.getElementById('studentLoginForm');
if (studentLoginForm) {
  studentLoginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = this.email.value.trim();
    const password = this.password.value.trim();

    if (!email || !validateEmail(email)) {
      showAlert('Please enter a valid email address.');
      return;
    }

    if (!password || password.length < 6) {
      showAlert('Password must be at least 6 characters long.');
      return;
    }

    alert('Student Login form validated successfully (demo). Server integration needed.');
    this.reset();
  });
}

// Profile Form Validation
const studentProfileForm = document.getElementById('studentProfileForm');
if (studentProfileForm) {
  studentProfileForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();

    if (!name) {
      showAlert('Please enter your full name.');
      return;
    }

    if (!email || !validateEmail(email)) {
      showAlert('Please enter a valid email address.');
      return;
    }

    alert('Profile updated successfully (demo). Server integration needed.');
  });
}

// Apply Form Validation (for apply.html)
const applyForm = document.getElementById('applyForm');
if (applyForm) {
  applyForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const resumeInput = this.resume;
    if (!resumeInput.files.length) {
      showAlert('Please upload your resume file (PDF).');
      return;
    }

    const file = resumeInput.files[0];
    if (file.type !== 'application/pdf') {
      showAlert('Only PDF files are allowed for the resume.');
      return;
    }

    alert('Application submitted successfully. Server integration needed.');
    this.reset();
  });
}
  
  // Helper function for email validation
function validateEmail(email) {
  // Simple email regex pattern
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
  