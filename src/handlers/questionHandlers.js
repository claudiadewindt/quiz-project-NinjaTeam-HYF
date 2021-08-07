'use strict';

import {
  QUESTION_CONTAINER_ID,
  NEXT_QUESTION_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';
import { nextQuestion } from '../listeners/questionListeners.js';
import { activateTimerFn } from '../views/timer.js';

//the showCurrentQuestion function will push the current question to the screen and activate the timer.
export const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionDOM = createQuestionElement(currentQuestion);

  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionDOM);
  activateTimerFn();
};

//the handleNextQuestion function will upgrade the currentQuestion index, to show what question will be executed
//stop the nextQuestion button from working until the user select any answer, and call the function to show the current question.
export const handleNextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  const nextQuestionButton = getDOMElement(NEXT_QUESTION_BUTTON_ID);
  nextQuestionButton.removeEventListener('click', nextQuestion);


// here we write code for the final page score and define the restart button
  
if (quizData.currentQuestionIndex === quizData.questions.length) {
      
      
    // here we replace the next-question by the get-result button
    const endButton = getDOMElement('btn-4')
    endButton.classList.add('hide')
    const resultButton = getDOMElement('get-result')
    resultButton.classList.remove('hide')
    
   // here we hide the timer and target the question container (main-wrapper)
    const timer2 = getDOMElement('btn-3')
    const questionsSection = getDOMElement('main-wrapper')
    const starterEl2 = getDOMElement('starter');
   // target score text and change it
    const scoreButton = getDOMElement('btn-2');
    const scoreText = scoreButton.querySelector('a')
    const scoreSpan = getDOMElement('score').textContent

    // target restart-button 
    const restartButton = getDOMElement('re-starter')

   // here we hide the question-container
    const hideContainer = ()=>{

      timer2.classList.add('hide');
      starterEl2.classList.add('hide');
      questionsSection.classList.add('hide');
      scoreButton.classList.add('centered')
      restartButton.classList.remove('hide')
      resultButton.classList.add('hide')
      restartButton.style.marginLeft = 'calc(50% - 80px)';
      scoreText.innerText = `Your Final Score is : ${scoreSpan}`
    }

    resultButton.addEventListener('click', hideContainer)

}else {
  showCurrentQuestion();
}


  
};
