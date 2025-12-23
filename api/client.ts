import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Usa a variável de ambiente aqui
  timeout: 5000,
});
console.log("url da api em prod : ", process.env.NEXT_PUBLIC_API_URL)
export default api;