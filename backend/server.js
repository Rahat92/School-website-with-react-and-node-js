const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
dotenv.config({path: 'backend/configuration/config.env'});

mongoose
    .connect('mongodb://localhost:27017/SmSystem',{useNewUrlParser: true})
    .then(()=>console.log('app connected with database successfully'))
const port = 8000 || process.env.PORT
app.listen(port, () => {
    console.log('App is running on port : ', port)
})