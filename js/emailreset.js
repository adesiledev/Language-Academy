const button = document.querySelector('.button ');

const email = document.querySelector('.email ');

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = event.currentTarget.email.value;

  console.log(email);
});
