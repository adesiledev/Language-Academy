const form = document.querySelector('form');
const btns = document.querySelector('button');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  event.stopPropagation();
  const fname = event.currentTarget.fullname.value;
  const email = event.currentTarget.email.value;
  const pass = event.currentTarget.password.value;
  const datrr = event.currentTarget.datte.value;
  const numb = event.currentTarget.num.value;
  const consist = event.currentTarget.consisting.value;
  const consistingtwo = event.currentTarget.consistingtwo.value;
  console.log(fname, email, numb, pass, datrr, consist, consistingtwo);
});
