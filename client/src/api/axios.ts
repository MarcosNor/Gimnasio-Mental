import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true, // para que axios establezca las cookies ahí
});

export default instance;