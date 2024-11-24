const express= require('express')
const{insertTestData,getPersonalizedTestRecords}= require('../controllers/testcontroller')
const router= express.Router();
router.post('/test',insertTestData)
router.get('/mytestresult',getPersonalizedTestRecords)
module.exports= router