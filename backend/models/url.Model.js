const mongoose =require('mongoose');

const Schema=mongoose.Schema;

const UrlSchema=new Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    originalUrl:{
        type:String,
        required:true,
    }
});

const Url=mongoose.model("Url",UrlSchema);
module.exports={Url};