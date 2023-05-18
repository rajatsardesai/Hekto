const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Wrong mongodb Id error
    if (err.name === "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    };

    // Mongoose duplicate key error
    if (err.code === 11000) {
        const message = `Resource already exists. Duplicate: ${err.path}`;
        err = new ErrorHandler(message, 400);
    };

    // Wrong JWT error
    if (err.name === "JsonWebTokenError") {
        const message = "JSON Web token is invalid, Try again";
        err = new ErrorHandler(message, 401);
    };

    // JWT Expired error
    if (err.name === "TokenExpiredError") {
        const message = "Token expired. Please log in again.";
        err = new ErrorHandler(message, 401);
    };

    res.status(err.statusCode).json({
        status: false,
        message: err.message
    })
}