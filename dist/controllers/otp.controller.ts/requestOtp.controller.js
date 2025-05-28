"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestOtp = void 0;
const auth_service_1 = require("../../services/auth.service");
const error_1 = require("../../config/constants/error");
const requestOtp = (req, res, next) => {
    try {
        // Validate request body
        if (!req.body || !req.body.mobile) {
            return next(error_1.ERRORS.INVALID_MOBILE);
        }
        if (typeof req.body.mobile !== "string" || req.body.mobile.length < 10) {
            return next(error_1.ERRORS.INVALID_MOBILE);
        }
        // Call the service to send OTP
        // This function should handle the logic of generating and sending the OTP
        // Here you would typically send the OTP to the user's mobile number or email
        const result = (0, auth_service_1.sendOtp)(req.body.mobile);
        // Check the result and send response accordingly
        if (!result.success) {
            // You can choose to use 400, 422, or 500 depending on the `message`
            return next(error_1.ERRORS.SERVER_ERROR);
        }
        // On success
        return res.status(200).json({
            success: true,
            message: result.message,
            ...(process.env.NODE_ENV === "development" && { otp: result.otp }), // Show OTP only in dev
        });
    }
    catch (error) {
        next(error);
    }
};
exports.requestOtp = requestOtp;
