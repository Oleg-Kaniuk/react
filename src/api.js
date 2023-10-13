import axios from 'axios';

axios.defaults.baseURL = 'https://65296fc155b137ddc83ed314.mockapi.io/api';

export const fetchQuizzes = async () => {
  const response = await axios.get('/quizzes');
  console.log(response)
  return response.data;
};

export const createQuiz = async quiz => {
  const response = await axios.post('/quizzes', quiz);
  console.log(response)
  return response.data;
};

export const deleteQuizById = async quizId => {
  const response = await axios.delete(`/quizzes/${quizId}`);
  console.log(response)
  return response.data;
};