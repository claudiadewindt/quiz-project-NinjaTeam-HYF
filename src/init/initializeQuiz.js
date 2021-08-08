'use strict';
import { QUESTION_CONTAINER_ID, QUIZ_CONTAINER_ID } from '../constants.js';
import { showCurrentQuestion } from '../handlers/questionHandlers.js';
import { createDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { createNextQuestionButtonElement } from '../views/questionViews.js';
import { quizData } from '../data.js';
import { startTheGame } from '../handlers/starTheGameHandlers.js';

//this function initialize the quiz if the question index 0 and call the setupQuizHTML function and showCurrentQuestion function.
export const initializeQuiz = () => {
  quizData.currentQuestionIndex = 0;
  setupQuizHTML();
  showCurrentQuestion();
};
// To call btn-4 in our HTML
const nextEl = getDOMElement('btn-4'); 

const setupQuizHTML = () => {
  const userInterfaceContainer = getDOMElement('user-interface');
  const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
  const questionContainer = createDOMElement('div', {
    id: QUESTION_CONTAINER_ID,
  });
  quizContainer.appendChild(questionContainer);
  const nextQuestionButton = createNextQuestionButtonElement();
  
  //this is the old location of our next question button
  //quizContainer.appendChild(nextQuestionButton); 

  //here we append this into our btn-4class
  nextEl.appendChild(nextQuestionButton); 
  console.log(quizContainer);
  userInterfaceContainer.appendChild(quizContainer);
};

window.addEventListener('load', startTheGame);
