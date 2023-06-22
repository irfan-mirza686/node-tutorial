const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.set('view engine','ejs');
// app.use(express.static(publicPath));
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
});

app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`);
});

app.get('/login',(_,resp)=>{
    resp.render('login');
});

app.get('/profile',(_,resp)=>{
    const user = {
        name:'irfan',
        email:'irfan@gmail.com',
        country:'Pakistan',
        skills:['php','laravel','nodejs','reactjs']
    }
    resp.render('profile',{user});
});

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/404.html`);
});

app.listen(5000);