const form = document.querySelector('form');

const inputs = document.querySelectorAll('input');

const message = document.querySelector('.msg');

console.log(message);

form.addEventListener('submit', function (event) {
  event.stopPropagation();

  event.preventDefault();

  const pass = event.currentTarget.password1.value;

  console.log(pass);

  const secondpass = event.currentTarget.password2.value;

  console.log(secondpass);

  if (inputs === ' ') {
    return (message.textContent = 'Password cannot be empty');
  }

  if (inputs.length < 8) {
    return (message.textContent = 'Password too short!');
  }
});
