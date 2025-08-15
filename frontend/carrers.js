const ageInput = document.getElementById('Age');
const phoneInput = document.getElementById('phone');
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}


phoneInput.addEventListener('input', () => {
  phoneInput.value = phoneInput.value.replace(/\D/g, '');

  if (phoneInput.value.length > 10) {
    phoneInput.value = phoneInput.value.slice(0, 10);
  }
});



ageInput.addEventListener('input', () => {
  const age = parseInt(ageInput.value, 10);

  if (age < 0) {
    ageInput.value = 0; 
  }

  if (age > 100) {
    ageInput.value = 100; // Optional: cap max age
  }
});


