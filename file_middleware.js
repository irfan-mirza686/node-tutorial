module.exports = reqFilter = (req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send('Please provide age');
    }
    else if(req.query.age <= 18)
    {
        resp.send('you don\'t have permission to access this page.');
    }
    else{
        next();
    }
    
}