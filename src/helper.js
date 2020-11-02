import config, { questions } from './config.json';

export function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function getQuestionsQuantity() {
  return Math.min(questions.length, config.maxQuestions);
}
