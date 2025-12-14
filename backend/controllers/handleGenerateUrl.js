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

        const expiresAt = expireAt ? new Date(expireAt) : new Date(Date.now() + 24 * 60 * 60 * 1000);
        if (Number.isNaN(expiresAt.getTime())) {
            return res.status(400).json({ error: "Invalid expireAt date" });
        }
        
        const newUrl = await Url.create(
            {
                originalUrl,
            shortId: id,
            expireAt: expiresAt,
        }
        );
        return res.status(201).json({
            shortUrl: `https://url-shortner-s7at.onrender.com/${newUrl.shortId}`,
            originalUrl: newUrl.originalUrl,
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }

};

module.exports={handleGenerateUrl}