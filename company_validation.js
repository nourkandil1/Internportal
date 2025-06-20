// Company Forms Validation

function showAlert(message) {
    alert(message);
  }
  
  // Signup Form Validation
  const companySignupForm = document.getElementById('companySignupForm');
  if (companySignupForm) {
    companySignupForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const companyName = this.companyName.value.trim();
      const email = this.email.value.trim();
      const password = this.password.value.trim();
  
      if (!companyName) {
        showAlert('Please enter your company name.');
        return;
      }
  
      if (!email || !validateEmail(email)) {
        showAlert('Please enter a valid company email address.');
        return;
      }
  
      if (!password || password.length < 6) {
        showAlert('Password must be at least 6 characters long.');
        return;
      }
  
      alert('Company Sign Up form validated successfully (demo). Server integration needed.');
      this.reset();
    });
  }
  
  // Login Form Validation
  const companyLoginForm = document.getElementById('companyLoginForm');
  if (companyLoginForm) {
    companyLoginForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const email = this.email.value.trim();
      const password = this.password.value.trim();
  
      if (!email || !validateEmail(email)) {
        showAlert('Please enter a valid company email address.');
        return;
      }
  
      if (!password || password.length < 6) {
        showAlert('Password must be at least 6 characters long.');
        return;
      }
  
      alert('Company Login form validated successfully (demo). Server integration needed.');
      this.reset();
    });
  }
  
  // Profile Form Validation
  const companyProfileForm = document.getElementById('companyProfileForm');
  if (companyProfileForm) {
    companyProfileForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const companyName = this.companyName.value.trim();
      const email = this.email.value.trim();
  
      if (!companyName) {
        showAlert('Please enter your company name.');
        return;
      }
  
      if (!email || !validateEmail(email)) {
        showAlert('Please enter a valid company email address.');
        return;
      }
  
      alert('Company profile updated successfully (demo). Server integration needed.');
    });
  }
  
  // Post Internship Form Validation (post-internship.html)
  const postInternshipForm = document.getElementById('postInternshipForm');
  if (postInternshipForm) {
    postInternshipForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const title = this.title.value.trim();
      const location = this.location.value.trim();
      const description = this.description.value.trim();
  
      if (!title) {
        showAlert('Please enter internship title.');
        return;
      }
      if (!location) {
        showAlert('Please enter internship location.');
        return;
      }
      if (!description) {
        showAlert('Please enter internship description.');
        return;
      }
  
      alert('Internship posted successfully (demo). Server integration needed.');
      this.reset();
    });
  }
  
  // Helper function for email validation
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  