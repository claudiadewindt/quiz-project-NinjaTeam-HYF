import { getDOMElement } from '../utils/DOMUtils.js';
import { nextQuestion } from '../listeners/questionListeners.js';

// Timer function
export const timerEl = getDOMElement('timer');
export let activateTimer;

// activate timer function.
export const activateTimerFn = () => {
  timerEl.textContent = 10;
  activateTimer = window.setInterval(counterTimer, 1000);
};

// deactivate timer function.
export const deactivateTimerFn = () => {
  clearInterval(activateTimer);
};

export let counterTimer = () => {
  let timerNumber = parseFloat(timerEl.textContent);
  if (timerNumber > 0) {
    timerEl.textContent = timerNumber - 1;
  } else {
    // go to next question and deactivate the last timer.
    deactivateTimerFn();
    nextQuestion();
  }
};
