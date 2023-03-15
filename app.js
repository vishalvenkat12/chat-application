const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res,next)=>{
    fs.readFile("messages.txt", (err,data)=>{
        if(err){
            data='No chats Exist'
        }
        res.send(`${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')">
    <input type="text" name="message" id="username">
        <input type="hidden" name="username" id="username"><br>
        <button type="submit">Send</button>
        </form>`);
    }); 
});

app.post('/', (req,res,next)=>{
    fs.writeFile("messages.txt", `${req.body.username} : ${req.body.message}`, {flag: a});
    res.redirect('/');
});

app.get('/login', (req,res,next)=>{
    res.send(`<form action="/login" method="POST" onSubmit="localStorage.setItem('username'. document.getElementById('username').value)">
        <input type="text" name="username" placeholder="username" id="username"><br>
        <button type="submit">Send</button>
        </form>`);
})
app.listen(3000);