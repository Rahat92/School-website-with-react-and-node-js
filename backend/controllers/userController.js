const Admin = require('../model/adminModel');
exports.getAllAdmin = (req,res,next) => {
    res.status(200).json({
        success: true,
        data: 'This routes to get all users'
    })
}
exports.createAdmin = async(req,res,next) => {
    try{
        const admin = await Admin.create(req.body);
        res.status(200).json({
            success: true,
            admin
        })
    }
    catch(err){
        res.status(400).json({
            status:'fail',
            message: err
        })
    }
}