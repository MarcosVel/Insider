import axios from 'axios';

// https://api.hgbrasil.com/weather?key=ad347e56&lat=-23.682&lon=-46.875

export const key = 'ae2bd24a';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
});

export default api;