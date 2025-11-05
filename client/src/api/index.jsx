import axios from "axios";

const API = axios.create({baseURL : 'http://localhost:8000'})

export const getAllKanjis = () => API.get('/learn/allKanji')