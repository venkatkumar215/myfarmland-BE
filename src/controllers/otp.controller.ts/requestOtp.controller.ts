import { NextFunction, Request, Response } from "express";
import { sendOtp } from "../../services/auth.service";
import { ERRORS } from "../../config/constants/error";
import { OTPRequestBody, OTPResponse } from "../../models/auth/otp.models";

export const requestOtp = (
  req: Request<{}, {}, OTPRequestBody>,
  res: Response<OTPResponse>,
  next: NextFunction
) => {
  try {
    // Validate request body
    if (!req.body || !req.body.mobile) {
      return next(ERRORS.INVALID_MOBILE);
    }
    if (typeof req.body.mobile !== "string" || req.body.mobile.length < 10) {
      return next(ERRORS.INVALID_MOBILE);
    }
    // Call the service to send OTP
    // This function should handle the logic of generating and sending the OTP
    // Here you would typically send the OTP to the user's mobile number or email
    const result = sendOtp(req.body.mobile);

    // Check the result and send response accordingly
    if (!result.success) {
      // You can choose to use 400, 422, or 500 depending on the `message`
      return next(ERRORS.SERVER_ERROR);
    }

    // On success
    return res.status(200).json({
      success: true,
      message: result.message,
      ...(process.env.NODE_ENV === "development" && { otp: result.otp }), // Show OTP only in dev
    });
  } catch (error) {
    next(error);
  }
};
