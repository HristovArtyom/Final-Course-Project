const API_KEY = process.env.REACT_APP_API_KEY
const HASH_KEY = process.env.REACT_APP_HASH_KEY
const API_URL = 'https://gateway.marvel.com:443/v1/public/'

export const api = {
  baseUrl: API_URL,
  keyUrl: `&ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`,
  request: async function (url) {
    const resp = await fetch(`${this.baseUrl}${url}${this.keyUrl}`)
      const data = await resp.json();
      return data;
  }
}

export default api;