import axios from "axios";

const API = axios.create({baseURL : import.meta.env.VITE_API_URL})

export const getAllKanjis = () => API.get('/learn/allKanji')
export const getKanjiByLevel = async(level, page=1, limit=25) => API.get(`/learn/kanjiByLevel?level=${level}&page=${page}&limit=${limit}`)
export const getKanjiDetails = (kanjiId) => API.get(`/learn/kanjiById/${kanjiId}`)
export const addStatusToProgress = (status, studentId) => API.put(``)
export const signup = (formData) => API.post('/student/signup', formData)
export const signin = (formData) => API.post('/student/signin', formData)
export const reportBug = (bugText) =>API.post('learn/report', bugText)
