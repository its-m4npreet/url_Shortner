const express=require('express');
const shortId=require('shortid')
const {Url}=require('../models/url.Model')


const handleGenerateUrl = async(req,res) =>{
    
    try{
        const {originalUrl, expireAt}= req.body;

        if (!originalUrl) {
            return res.status(400).json({ error: "Original URL is required" });
        }
        const id =shortId.generate();
        
        const newUrl = await Url.create(
            {
                originalUrl,
            shortId: id,
            expireAt: expireAt || null,
        }
        );
        return res.status(201).json({
            shortUrl: `http://localhost:3000/${newUrl.shortId}`,
            originalUrl: newUrl.originalUrl,
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }

};

module.exports={handleGenerateUrl}