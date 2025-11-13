import axios from "axios";

const API = axios.create({baseURL : import.meta.env.VITE_API_URL})

export const getAllKanjis = () => API.get('/learn/allKanji')
export const getKanjiByLevel = async(level, page=1, limit=25) => API.get(`/learn/kanjiByLevel?level=${level}&page=${page}&limit=${limit}`)
export const getVocabByLevel = async(level, page=1, limit=25) => API.get(`/learn/vocabByLevel?level=${level}&page=${page}&limit=${limit}`)
export const getKanjiDetails = (kanjiId) => API.get(`/learn/kanjiById/${kanjiId}`)
export const signup = (formData) => API.post('/student/signup', formData)
export const signin = (formData) => API.post('/student/signin', formData)
export const reportBug = (bugText) =>API.post('learn/report', bugText)

export const addStatusToProgress = (status, kanjiId ,token) => 
    API.post(`/learn/updateStatus`, 
         {status, kanjiId}, 
         { headers : {Authorization : `Bearer ${token}`}}
    )
   
export const getProgressStatus = (kanjiId, token) =>
  API.get(`/learn/progressStatus?kanjiId=${kanjiId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  export const removeProgressStatus = (kanjiId, token) =>
  API.delete('/learn/remove', {
    headers: { Authorization: `Bearer ${token}` },
    data: { kanjiId },
  });

  export const getKanjiVocabCount = (token) => API.get(`/learn/itemCount`, {headers : {Authorization : `Bearer ${token}`}})