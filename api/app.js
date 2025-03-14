const express = require('express');
const { sendFile } = require('express/lib/response');
const { dirname } = require('path');
const path = require('path');
const app = express();

const pathToIndex = path.resolve(__dirname,'../client/index.html');

app.use('/*',(req,res)=>{
    res.sendFile(pathToIndex);
})

module.exports = app;