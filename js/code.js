const form = document.querySelector('form');
const btn = document.querySelector('button');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  const emails = event.currentTarget.email.value;
  console.log(emails);
});
