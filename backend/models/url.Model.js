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
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    expireAt:{
        type:Date,
        default:() => new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'active',
    },
    visit:[{
        timestamp:{
            type: Date,
            default: Date.now,
        }
    }]
});

const Url=mongoose.model("Url",UrlSchema);
module.exports={Url};