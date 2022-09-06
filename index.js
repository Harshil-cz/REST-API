var express = require('express')
var cookie_parser = require('cookie-parser')
var app = express()
app.use(cookie_parser())
 
var requestage =(req, res, next)=>{
    if(!req.query.age){
        res.send("please provide age")
    }
    else if(req.query.age<18){
        res.send("sorry you are under age. You can not access this site.")
    }
    else{
        next()        
    } 
}

app.use(requestage)

//Welcome Message
app.get('/', function (req, res) {
    res.status(200).send(`
<h2 style="font-family: cursive; color: lightseagreen; text-align: center; ">Hello! Welcome to our site</h2>
 
`);
});

//Setting up a Cookie
app.get('/setcookie',function(req, res){
    res.cookie('name', 'Mohit');
 
    res.status(200).send(`
<h4 style="font-family: Tahoma; color: coral; text-align: center;">Setting up the Cookie</h4>

`);
});
 
//Checking cookie is set or not
app.get('/getcookie', function(req, res) {
    res.status(200).send(req.cookies);
});
 
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));