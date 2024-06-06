import axios from 'axios';

// Create axios client, pre-configured with baseURL
const ServerAPI = axios.create({
  baseURL: 'https://europe-west6-tuscany-thrill.cloudfunctions.net/Tuscany-Thrill-BE',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default ServerAPI