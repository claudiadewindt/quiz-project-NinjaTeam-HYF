'use strict';

import { handleNextQuestion } from '../handlers/questionHandlers.js';

//this function call the handleNextQuestion function.
export const nextQuestion = () => {
  handleNextQuestion();
};
