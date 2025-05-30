import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";

export async function generateOtp(
  number: string = "7092027870",
  countryCode: string = "+91"
): Promise<FirebaseAuthTypes.ConfirmationResult> {
  const formattedPhone = `${countryCode}${number.trim()}`;
  const otpConfirmation = await auth().signInWithPhoneNumber(formattedPhone);
  return otpConfirmation;
}
