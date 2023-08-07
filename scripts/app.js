
const form = document.getElementById('sign-up-form');


function validatePassword(password, confirm_password) {
  return password.value === confirm_password.value;
}

function validateForm(e) {
  const password = document.getElementById('password');
  const confirm_password = document.getElementById('confirm_password');
  e.preventDefault();
  if (validatePassword(password, confirm_password)) {
    form.submit();
  } else {
    document.getElementById('error-js').innerHTML = 'Passwords do not match';
    password.style.border = '1px solid red';
    confirm_password.style.border = '1px solid red';
    //shake animation
    form.classList.add('submit-error');
  }
}

form.addEventListener('submit', validateForm);