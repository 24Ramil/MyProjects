

document.addEventListener('DOMContentLoaded', () => {
  const phoneInput = document.getElementById('phoneInp');
  const emailInput = document.getElementById('emailInp');
  const registerButton = document.getElementById('btn_register');

  const phoneRegex = /^(\+?\d{2,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{2,3}[-.\s]?\d{2,3}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  registerButton.addEventListener('click', () => {
      const phoneValid = phoneRegex.test(phoneInput.value);
      const emailValid = emailRegex.test(emailInput.value);

      if (!phoneValid) {
          alert('Please enter a valid phone number');
      } else if (!emailValid) {
          alert('Please enter a valid email');
      } else {
          alert('Registration successful!');
      }
      
  });

});
