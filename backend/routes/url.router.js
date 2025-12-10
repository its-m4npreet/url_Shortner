const express= require('express')
const {handleGenerateUrl}=require('../controllers/handleGenerateUrl')
const {handleRedirectUrl}=require('../controllers/handleRedirectUrl')

const urlRouter=express.Router();

urlRouter.post('/generate',handleGenerateUrl);

urlRouter.get('/:id',handleRedirectUrl);

module.exports={urlRouter}