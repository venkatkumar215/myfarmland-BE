"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveOTP = saveOTP;
exports.verifyOTP = verifyOTP;
exports.deleteOTP = deleteOTP;
const otpStore = {};
function saveOTP(identifier, otp, ttlMinutes = 5) {
    otpStore[identifier] = {
        otp,
        expiresAt: Date.now() + ttlMinutes * 60 * 1000,
    };
}
function verifyOTP(identifier, inputOtp) {
    const record = otpStore[identifier];
    if (!record || Date.now() > record.expiresAt)
        return false;
    return record.otp === inputOtp;
}
function deleteOTP(identifier) {
    delete otpStore[identifier];
}
