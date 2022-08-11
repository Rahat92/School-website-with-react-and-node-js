const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes')
app.use(express.json());
app.use('/api/v1/admin',userRoutes )
app.all('*',(req,res,next) => {
    res.status(404).json({
        status:'fail',
        message: `not found ${req.originalUrl} on this server`
    })
})

module.exports = app;