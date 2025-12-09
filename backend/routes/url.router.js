const express= require('express')
const {handleGenerateUrl}=require('../controllers/handleGenerateUrl')

const urlRouter=express.Router();

urlRouter.post('/generate',handleGenerateUrl);


module.exports={urlRouter}