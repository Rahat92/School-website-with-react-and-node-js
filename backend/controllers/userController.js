const catchAsync = require('../utils/catchAsync')
const Admin = require('../model/adminModel');
exports.getAllAdmin = (req,res,next) => {
    res.status(200).json({
        success: true,
        data: 'This routes to get all users'
    })
}



exports.createAdmin = catchAsync(async(req,res,next) => {
        const admin = await Admin.create(req.body);
        res.status(200).json({
            success: true,
            admin
        })
    })    