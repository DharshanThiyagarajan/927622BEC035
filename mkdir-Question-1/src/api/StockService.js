import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/evaluation-service/NVDA';
const TOKEN = import.meta.env.VITE_API_TOKEN;

export const fetchStocks = async () => {
  const response = await axios.get(`${BASE_URL}/stocks`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  });
  return response.data;
};
