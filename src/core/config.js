import axios from 'axios';

const baseUrl = 'http://localhost:3001';

export const urls = {
  permissions: '/permissions',
};

export const axiosR = axios.create({
  baseURL: baseUrl,
});
