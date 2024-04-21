require('dotenv').config();
const express = require('express');


const exMethod=express();

const port =4000;

exMethod.get('/',(req,res)=>{
    res.send('hello world');
});
exMethod.get('/login',(req,res)=>{
    res.send('hello login');
});
exMethod.get('/lone',(req,res)=>{
    res.send('<h2>hello lone</h2>');
});
exMethod.listen(process.env.PORT,(req,res)=>{
    console.log(`listening say, what! ${port}${process.env.PORT}`);
})                      