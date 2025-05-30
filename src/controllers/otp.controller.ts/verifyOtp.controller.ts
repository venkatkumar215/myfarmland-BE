import { NextFunction, Request, Response } from "express";
import { ERRORS } from "../../config/constants/error";
import { verifyOTP } from "../../utils/otpStore";
import { SUCCESS_CONSTANT } from "../../config/constants/success";
import {
  OTPResponse,
  VerifyOTPRequestBody,
} from "../../models/auth/otp.models";
import { verifyOtpSchema } from "../../schema/auth.schema";


export const verifyOtp = (
  req: Request<{}, {}, VerifyOTPRequestBody>,
  res: Response<OTPResponse>,
  next: NextFunction
) => {
  try {
    const parsed = verifyOtpSchema.safeParse(req.body);

    if (!parsed.success) {
      return next(ERRORS.INVALID_OTP);
    }

    const { mobile, otp } = req?.body;

    const isVerified = verifyOTP(mobile, otp);

    if (!isVerified) {
      return next(ERRORS.INVALID_OTP);
    }

    // On success
    return res.status(200).json({
      success: true,
      message: SUCCESS_CONSTANT.VERIFY_OTP_SUCESS,
     
    });
  } catch (error) {
    next(error);
  }
};
