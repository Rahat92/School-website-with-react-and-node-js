const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const AppError = require('./utils/AppError');
app.use(express.json());
app.use('/api/v1/admin',userRoutes );
app.all('*',(req,res,next) => {
    return next(new AppError(`cann't found : ${req.originalUrl}`,404))
})

app.use((err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status: err.status,
        message:err.message
    })
})
module.exports = app;


/*
    app.all('*',(req,res,next) => {
    // res.status(404).json({
    //     status:'fail',
    //     message: `not found ${req.originalUrl} on this server`
    // })
    const err = new Error(`not found : ${req.originalUrl} on this server`);
    err.status = 'fail';
    err.statusCode = 404;
    next(err)
})

app.use((err,req,res,next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status: err.status,
        message:err.message
    })
})

*/