const express = require('express');
const app = express();

app.get('',(req,res)=>{
    // console.log("data sent by browser ", req.query.name);
    // res.send('Welcome '+ req.query.name);
    res.send(`
        <h4>Welcome, to home page. </h4> <a href="/about" >Go to about page </a>
    `);
});

app.get('/about',(req,res)=>{

    res.send(`
    <input type="text" placeholder="Enter Your Name" />
    <button>Click</button></br>
    <a href="/" >Go to home page </a>

    `);
});

app.get('/help',(req,res)=>{

    res.send([
        {
            name: 'Irfan',
            email: 'irfan@gmail.com'
        },
        {
            name: 'Nomi',
            email: 'nomi@gmail.com'
        }
        
    ]);
});

app.listen(5000);