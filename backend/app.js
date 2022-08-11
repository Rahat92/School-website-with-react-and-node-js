const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes')
app.use(express.json());
// app.use((req,res,next)=>{
//     console.log('I am from middleware');
//     next()
// })
app.use('/api/v1/admin',userRoutes )
app.all('*',(req,res,next)=>{
    // res.status(404).json({
    //     status:'fail',
    //     message:`Cann't find ${req.originalUrl} on this server`
    // })
    const error = new Error(`Cann't find ${req.originalUrl} on this server`)
    error.status = 'fail'
    error.statusCode = 404;
    next(error)
})

app.use((err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status: err.status,
        message:err.message
    })
})

module.exports = app;