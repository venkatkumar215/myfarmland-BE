"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERRORS = void 0;
const appError_1 = require("../../utils/appError");
exports.ERRORS = {
    INVALID_MOBILE: new appError_1.AppError("Invalid mobile number", 400),
    OTP_EXPIRED: new appError_1.AppError("OTP has expired", 400),
    TOO_MANY_ATTEMPTS: new appError_1.AppError("Too many attempts", 429),
    UNAUTHORIZED: new appError_1.AppError("Authentication required", 401),
    SERVER_ERROR: new appError_1.AppError("Internal server error", 500),
};
