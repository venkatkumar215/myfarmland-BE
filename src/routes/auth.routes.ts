import express, { Request, Response } from "express";
import { requestOtp } from "../controllers/otp.controller.ts/requestOtp.controller";

const router = express.Router();

router.post("/request-otp", requestOtp); // /api/auth/request-otp

export default router;
//
