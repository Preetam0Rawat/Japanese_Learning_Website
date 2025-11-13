import express from 'express'
import {getAllKanji, getKanjiById, getKanjiByJlptLevel, getAllVocab, getVocabById, getVocabByJlptLevel, updateProgressStatus, removeFromProgress, reportBug, getProgressOfStudent, getProgressStatus, getItemCount} from '../controller/learn.js'
import {auth} from  '../middleware/index.js'
const Router = express.Router()

Router.get('/allKanji', getAllKanji)
Router.get('/kanjiById/:id', getKanjiById)
Router.get('/kanjiByLevel', getKanjiByJlptLevel)

Router.get('/allVocab', getAllVocab)
Router.get('/vocabById/:id', getVocabById)
Router.get('/vocabByLevel', getVocabByJlptLevel)


Router.post('/updateStatus',auth, updateProgressStatus)
Router.get('/progressStatus', auth, getProgressStatus)    //of individual kanji/voacbular
Router.delete('/remove', auth, removeFromProgress)

Router.get('/progress', auth, getProgressOfStudent)      //of a student
Router.get('/itemCount', auth, getItemCount)
Router.post('/report', reportBug)

export default Router  