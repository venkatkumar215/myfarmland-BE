// authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import admin from "../../config/firebase/firebase";
import { ERRORS } from "../../config/constants/error";

export interface AuthRequest extends Request {
  user?: admin.auth.DecodedIdToken;
}

export const verifyFirebaseToken = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(ERRORS.UNAUTHOZIRED_TOKEN);
  }

  const idToken = authHeader.split("Bearer ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken; // Attach decoded token (user info) to request object
    next();
  } catch (error) {
    console.error("Error verifying Firebase ID token:", error);
    return next(ERRORS.INVALID_TOKEN);
  }
};
