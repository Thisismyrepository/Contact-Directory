const express = require('express');
const app = express();
const routes = require('./api/api');
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',routes);
app.listen(process.env.PORT|| 2222,()=>{
    console.log('Server Start');
})