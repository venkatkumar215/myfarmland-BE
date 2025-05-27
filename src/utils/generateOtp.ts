export function generateOtp(
  length: number = 6,
  number: string = "0123456789"
): string {
  if (length < 1 || length > 10) {
    throw new Error("OTP length must be between 1 and 10");
  }
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += number[Math.floor(Math.random() * number.length)];
  }
  return otp;
}
