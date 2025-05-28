export interface OTPRequestBody {
  mobile?: string;
}

export interface OTPResponse {
  success: boolean;
  message: string;
  token?: string; // optional field, e.g., on successful login
}

export interface VerifyOTPRequestBody{
    otp:string;
    mobile:string;
}