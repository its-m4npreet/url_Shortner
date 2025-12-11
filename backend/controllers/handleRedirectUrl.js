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
    if(urlData.status==="inactive"){
      return res.status(400).send("url is inactive");
    }
    if(urlData.expireAt && urlData.expireAt<Date.now()){
      urlData.status="inactive";
      await urlData.save();
      return res.status(400).send("url has expired")
    }
    urlData.visit.push({
      timestamp:new Date(),
    })
    await urlData.save();

    console.log(urlData.originalUrl,`originalUrl`);
    
    // Check if URL already has protocol, if not add https://
    const redirectUrl = urlData.originalUrl.startsWith('http://') || urlData.originalUrl.startsWith('https://') 
      ? urlData.originalUrl 
      : `https://${urlData.originalUrl}`;
    
    return res.redirect(redirectUrl);

  }catch(err){
    return res.status(500).send("server error");
  }

}

module.exports={handleRedirectUrl}