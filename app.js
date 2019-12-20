const fs = require('fs');
const express = require('express');

const app = express();
const port = 6500;

app.get('/',(req,res) => {
    res.send("<h1>welcome to express</h1>");
})

app.get('/display', (req,res) => {
    fs.readFile('db.json',(err,result)=> {
        if(err){
            throw err;
            console.log("unable to write to a new file - ", err, " please enter new filename");
        }
        else{
            res.send(JSON.parse(result));
        } 
    })
})

app.listen(port, (err) => {
    if(err){
        console.log("error - " , err);
    }
    else{
        console.log("listening..");
    }
});

