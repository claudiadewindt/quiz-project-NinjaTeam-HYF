'use strict';

import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { createDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { checkAnswer } from '../views/answer-selection.js';

/**
 * Create an Answer element
 */

export const createAnswerElement = (answerText, letters) => {
  // here we make structure for each answer, put the answer text inside the buttons
  // and put a capital letter for every choice.
  const answerElement = createDOMElement('div');
  answerElement.className = 'choice-container';

  const choiceLetter = createDOMElement('p');
  choiceLetter.className = 'prefixer-container';
  choiceLetter.innerText = letters.toUpperCase();
  answerElement.appendChild(choiceLetter);

  const answerButton = createDOMElement('button');
  answerElement.appendChild(answerButton);
  answerButton.innerText = answerText;

  return answerElement;
};

/**
 * Create a full question element
 */

export const createQuestionElement = (question) => {
  // question argument is whole element in quizData.question array.
  // here we make a structure for whole question to put answers in it.

  const mainWrapper = document.createElement('div');
  mainWrapper.id = 'main-wrapper';
  //container.appendChild(mainWrapper);

  const questionText = document.createElement('h2');
  questionText.id = 'Next-question';
  questionText.innerText = question.text;
  mainWrapper.appendChild(questionText);

  const answersContainer = document.createElement('div');
  answersContainer.className = 'questions-wrapper';
  //answersContainer.id = 'user-interface';
  mainWrapper.appendChild(answersContainer);

  // this for loop is to execute the function to build structure for every answer for current question,
  for (const answerKey in question.answers) {
    const answer = createAnswerElement(question.answers[answerKey], answerKey);
    //then we append it to the question div which we made above.
    answersContainer.appendChild(answer);
  }

  // here we put a unique Id for every button after producing them in the other for loop.
  // and also put the same class to let it different when hovering.
  let answerKeyNumber = 0;
  let buttonsEl = mainWrapper.querySelectorAll('button');
  for (const answerKey in question.answers) {
    buttonsEl[answerKeyNumber].classList.add('answer-button');
    buttonsEl[answerKeyNumber].id = answerKey;
    
    answerKeyNumber++;
  }

  //!important
  // here we added an event listener for each button to check if the answer is right.
  buttonsEl.forEach((button) => button.addEventListener('click', checkAnswer));

  // return the whole container to screen.
  return mainWrapper;
};

/**
 * Creates and returns the next questions button
  */

export const createNextQuestionButtonElement = () => {
  const buttonElement = createDOMElement('button', {
    id: NEXT_QUESTION_BUTTON_ID,
  });

  buttonElement.innerText = 'Next \n Q';

  //buttonElement.addEventListener('click', nextQuestion);

  return buttonElement;
};
