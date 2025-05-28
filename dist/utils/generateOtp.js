"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOtp = generateOtp;
function generateOtp(length = 6, number = "0123456789") {
    if (length < 1 || length > 10) {
        throw new Error("OTP length must be between 1 and 10");
    }
    let otp = "";
    for (let i = 0; i < length; i++) {
        otp += number[Math.floor(Math.random() * number.length)];
    }
    return otp;
}
