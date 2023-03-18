import { Notify } from 'notiflix/build/notiflix-notify-aio';

const createPromiseForm = document.querySelector('.form');

createPromiseForm.addEventListener('submit', handleCreatePromiseFormSubmit);

function handleCreatePromiseFormSubmit(e) {
  e.preventDefault();
  const {elements: {delay, step, amount}}= e.currentTarget;
  console.log (e.currentTarget.elements);
  let userDelay = Number(delay.value);
  const userStep = Number(step.value);
  const userAmount = Number(amount.value);
  for (let position = 1; position <= userAmount; position += 1) {
    createPromise(position, userDelay)
      .then(({ position, delay }) =>
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          timeout: 5000,
          clickToClose: true,
        })
      )
      .catch(({ position, delay }) =>
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          timeout: 5000,
          clickToClose: true,
        })
      );
    userDelay += userStep;
  }
  e.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
