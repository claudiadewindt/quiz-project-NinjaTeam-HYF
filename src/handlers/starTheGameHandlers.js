import { getDOMElement } from '../utils/DOMUtils.js';
import { initializeQuiz } from '../init/initializeQuiz.js';

// Targeting the elements.
const quizContainerEl = getDOMElement('startText');
const starterEl = getDOMElement('starter');
const scoreEl = getDOMElement('btn-2');
const timerEl = getDOMElement('btn-3');
const nextEl = getDOMElement('btn-4');
const imgGifEl = getDOMElement('ninja-gif');

//once we click start button >>
export const startTheGame = () => {
   // 1- add 'hide' class to the buttons and picture on the screen.
  const hideButton = () => {
    starterEl.classList.add('hide');
    quizContainerEl.classList.add('hide');
    imgGifEl.classList.add('hide');
  };

  // 2- start to show buttons like score and timer .. etc. by removing the hide class.
  const unHideButton = () => {
    scoreEl.classList.remove('hide');
    timerEl.classList.remove('hide');
    nextEl.classList.remove('hide');
  };

  // 3- to execute that we add these event listeners to the start button.
  starterEl.addEventListener('click', initializeQuiz);
  starterEl.addEventListener('click', hideButton);
  starterEl.addEventListener('click', unHideButton);
  return starterEl;
};
