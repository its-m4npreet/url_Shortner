const express = require('express');
const  {Url}  = require('../models/url.Model');


const handleRedirectUrl=async(req,res)=>{
  try{
    const id=req.params.id;
    console.log(id,`id`);
    const urlData = await Url.findOne({ shortId: id });
    console.log(urlData,`urlData`);

    if(!urlData){
       return res.status(404).send("url is not found");
    }
    console.log(urlData.originalUrl,`originalUrl`);
    return res.redirect(`https://${urlData.originalUrl}`);

  }catch(err){
    return res.status(500).send("server error");
  }

}

module.exports={handleRedirectUrl}