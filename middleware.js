const express =require('express');
const reqFilter = require('./file_middleware');
const route = express.Router();
const app = express();



// app.use(reqFilter)

route.use(reqFilter);

app.get('',(req,resp)=>{
    resp.send('Welcome to Home page');
});

app.get('/users',(req,resp)=>{
    resp.send('Welcome to Users page');
});

route.get('/about',(req,resp)=>{
    resp.send('This is About page');
});

route.get('/contact',(req,resp)=>{
    resp.send('This is Contact page');
});

app.use('/',route);

app.listen(5000);