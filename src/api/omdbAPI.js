import axios from "axios";
export const API_ROOT ='https://www.omdbapi.com/';

const omdbapi = axios.create({
    baseURL: API_ROOT,
    timeout: 90000,
  });

export default omdbapi;
