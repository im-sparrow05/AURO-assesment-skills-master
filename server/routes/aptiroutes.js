const express= require('express')
const {getAptitudeQuestion, insertUploadedQuestion,getuploadedQuestion,checkAnswer}= require('../controllers/apticontroller')
//Initializing app router
const router= express.Router()
router.get('/aptitude',getAptitudeQuestion)
router.post('/upload',insertUploadedQuestion)
router.get('/apti_questions',getuploadedQuestion)
router.post('/checkanswer',checkAnswer)
//Export Router
module.exports= router