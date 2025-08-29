const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onImput);

console.log(inputEl);
console.log(spanEl);

function onImput(event) {
  const trimmedValue = event.currentTarget.value.trim();
  if (trimmedValue !== '') {
    spanEl.textContent = trimmedValue;
  } else {
    spanEl.textContent = 'Anonymous';
  }
}
