import { AppError } from "../../utils/appError";

export const ERRORS = {
  INVALID_MOBILE: new AppError("Invalid mobile number", 400),
  OTP_EXPIRED: new AppError("OTP has expired", 400),
  TOO_MANY_ATTEMPTS: new AppError("Too many attempts", 429),
  UNAUTHORIZED: new AppError("Authentication required", 401),
  SERVER_ERROR: new AppError("Internal server error", 500),
  INVALID_OTP: new AppError("Invalid OTP", 400),
  UNAUTHOZIRED_TOKEN: new AppError("Unauthorized: No token provided", 401),
  INVALID_TOKEN: new AppError("Unauthorized: Invalid token", 401),
};

export const ERRORS_CONSTANT = {
  FAIL_GENERATE_OTP: "Failed to generate OTP",
};
