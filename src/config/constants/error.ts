import { AppError } from "../../utils/appError";

export const ERRORS = {
  INVALID_MOBILE: new AppError("Invalid mobile number", 400),
  OTP_EXPIRED: new AppError("OTP has expired", 400),
  TOO_MANY_ATTEMPTS: new AppError("Too many attempts", 429),
  UNAUTHORIZED: new AppError("Authentication required", 401),
  SERVER_ERROR: new AppError("Internal server error", 500),
};
