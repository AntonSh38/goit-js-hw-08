const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (
    formEl.elements.email.value.trim() === '' ||
    formEl.elements.password.value.trim() === ''
  ) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: formEl.elements.email.value.trim(),
    password: formEl.elements.password.value.trim(),
  };

  console.log(formData);

  formEl.reset();
}
