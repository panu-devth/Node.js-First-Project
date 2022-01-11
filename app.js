const express = require('express');
const debug = require('debug');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req,res) =>{

    res.send("Hello NodeJS Www");

})

app.listen(port, ()=>{
    console.log("Listening on port " + port);
})