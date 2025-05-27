// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// import { UserType } from "../types/user";

// export const authenticateJWT = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) return res.status(401).json({ message: "Token missing" });

//   try {
//     const decoded = jwt.verify(
//       token,
//       process.env.JWT_SECRET as string
//     ) as UserType;
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(403).json({ message: "Invalid token" });
//   }
// };
