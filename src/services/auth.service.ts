import { ERRORS_CONSTANT } from "../config/constants/error";
import { SUCCESS_CONSTANT } from "../config/constants/success";
import { sentOtpType } from "../types/otp";
import { generateOtp } from "../utils/generateOtp";
import { saveOTP } from "../utils/otpStore";

export const sendOtp = (mobileNumber: string): sentOtpType => {
  try {
    const otp = generateOtp(); // Generate 6-digit OTP
    if (!otp) {
      return {
        success: false,
        message: ERRORS_CONSTANT.FAIL_GENERATE_OTP,
      };
    }
    saveOTP(mobileNumber, otp);
    // Simulate sending OTP (e.g., SMS API)
    console.log(`📲 OTP sent to ${mobileNumber}: ${otp}`);
    return {
      success: true,
      message: SUCCESS_CONSTANT.OTP_SUCESS,
    };
  } catch (error) {
    console.error("Error sending OTP:", error);
    return {
      success: false,
      message: (error as Error).message || ERRORS_CONSTANT.FAIL_GENERATE_OTP,
    };
  }
};
