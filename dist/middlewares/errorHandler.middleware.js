"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const appError_1 = require("../utils/appError");
const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Something went wrong";
    // Hide details in production if not an AppError
    if (process.env.NODE_ENV === "production" && !(err instanceof appError_1.AppError)) {
        statusCode = 500;
        message = "Internal server error";
    }
    res.status(statusCode).json({
        success: false,
        message,
    });
};
exports.errorHandler = errorHandler;
