const otpStore: Record<string, { otp: string; expiresAt: number }> = {};

export function saveOTP(identifier: string, otp: string, ttlMinutes = 5) {
  otpStore[identifier] = {
    otp,
    expiresAt: Date.now() + ttlMinutes * 60 * 1000,
  };
}

export function verifyOTP(identifier: string, inputOtp: string): boolean {
  const record = otpStore[identifier];
  if (!record || Date.now() > record.expiresAt) return false;
  return record.otp === inputOtp;
}

export function deleteOTP(identifier: string) {
  delete otpStore[identifier];
}
