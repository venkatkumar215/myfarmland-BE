"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendOtp = void 0;
const otpStore_1 = require("../utils/otpStore");
const sendOtp = (mobileNumber) => {
    try {
        const otp = false; // Generate 6-digit OTP
        if (!otp) {
           
            return {
                success: false,
                message: "Failed to generate OTP",
            };
        }
        (0, otpStore_1.saveOTP)(mobileNumber, otp);
        // Simulate sending OTP (e.g., SMS API)
        console.log(`📲 OTP sent to ${mobileNumber}: ${otp}`);
        return {
            success: true,
            message: "OTP sent successfully",
        };
    }
    catch (error) {
        console.error("Error sending OTP:", error);
        return {
            success: false,
            message: error.message || "Failed to send OTP",
        };
    }
};
exports.sendOtp = sendOtp;
