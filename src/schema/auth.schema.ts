import { z } from "zod";

export const verifyOtpSchema = z.object({
  mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  otp: z.string().length(6, "OTP must be exactly 6 characters"),
});

// Export type for TypeScript
export type VerifyOtpInput = z.infer<typeof verifyOtpSchema>;
