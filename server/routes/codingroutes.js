const express= require('express')
const{ getCodingQuestion,insertUploadedCodingQuestion,getuploadedCodingQuestion}= require('../controllers/coding_controllers')
//Initializing app router
const router= express.Router()
//Declaring Routes
router.get('/codingproblem',getCodingQuestion)
router.post('/uploadproblem',insertUploadedCodingQuestion)
router.get('/getproblems',getuploadedCodingQuestion)
module.exports= router