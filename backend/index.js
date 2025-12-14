const express = require('express');
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config();


const connectDB = require('./config/database');
const { urlRouter } = require('./routes/url.router');
const { authRouter } = require('./routes/auth.router');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());


app.get("/", (req, res) => {
    res.send("Welcome to URL Shortener Backend 😁");

  });
  app.use('/auth', authRouter);
  app.use('/',urlRouter)
  

const PORT = process.env.PORT;

app.listen(PORT, async() => {
    try{
        console.log('database is connecting...');
        await connectDB();
        console.log(`Server is running on port http://localhost:${PORT}`);
        console.log('database is connected');
    }catch(error){
        console.log(error);
    }
});