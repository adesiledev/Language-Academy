const form = document.querySelector('form');
const button = document.querySelector('button');
// const inputvalues = document.querySelector;
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // const Fname = event.currentTarget.fullname.value;
  const email = event.currentTarget.email.value;
  const password = event.currentTarget.password.value;
  console.log(email, password);
});
// const fullname = document.querySelector('.fullname');

// if (Fname === '') {
//   alert('name is requirewd');
//   return;
// }
