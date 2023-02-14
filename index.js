// this is the file which will be excuted by docker container

const express = require ('express ');
const bodyparser= require('body-parser');
const sequelize = require ('./util/database'); 
const User = require('./models/user');

const app =express ();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended :false}));


app.use((req,res, next )=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Origin','GET','POST','PUT','DELETE');
    next();

});

// test route

app.get('/',(req,res,next) => {

    res.send('hello John');
})


app.use('/', (require('./routes/users'));

)