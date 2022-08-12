class AppError extends Error{
    constructor(message, statusCode,status){
        super(message)
        this.status = status;
        this.statusCode = statusCode;
    }
}
module.exports = AppError;