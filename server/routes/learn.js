import express from 'express'
import {getAllKanji, getKanjiById, getKanjiByJlptLevel, getAllVocab, getVocabById, getVocabByJlptLevel, updateProgressStatus, getProgress, removeFromProgress, reportBug} from '../controller/learn.js'

const Router = express.Router()

Router.get('/allKanji', getAllKanji)
Router.get('/kanjiById/:id', getKanjiById)
Router.get('/kanjiByLevel', getKanjiByJlptLevel)

Router.get('/allVocab', getAllVocab)
Router.get('/vocabById/:id', getVocabById)
Router.get('/vocabByLevel', getVocabByJlptLevel)


Router.post('/updateStatus', updateProgressStatus)
Router.get('/progress/:studentId', getProgress)
Router.delete('/remove/:progressId', removeFromProgress)

Router.post('/report', reportBug)

export default Router  