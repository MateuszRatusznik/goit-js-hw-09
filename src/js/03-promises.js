// Opcja dla Chętnych
import Notiflix, { Notify } from 'notiflix';

const delay = document.querySelector('#delay');
const step = document.querySelector('#step');
const amount = document.querySelector('#amount');
const button = document.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => 
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({position, delay})
        } else {
          reject({position, delay})
        }
    }, delay)
  );
  return promise;
};  

button.addEventListener("click", event => {
  event.preventDefault();
  let firstDelay = Number(delay.value);
  let userStep = Number(step.value);
    for(let i=0; i < amount.value; i++) {
      createPromise(1 + i, firstDelay + i * userStep)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    }
});
