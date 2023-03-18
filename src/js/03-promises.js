const createPromiseForm = document.querySelector('.form');

createPromiseForm.addEventListener('submit', handleCreatePromiseFormSubmit);

function handleCreatePromiseFormSubmit(e) {
e.preventDefault();
const {
  elements: { delay, step, amount }
} = e.currentTarget;
console.log(`delay: ${delay.value}, step: ${step.value}, amount: ${amount.value}`);
e.currentTarget.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
