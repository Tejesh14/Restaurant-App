const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('profile');
})

app.get('/order',(req,res)=>{
    res.render('order');
})

app.listen(8080,()=>{
    console.log('Server is running at port 8080');
})