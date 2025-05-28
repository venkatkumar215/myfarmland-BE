import express from "express";
import { requestOtp } from "../controllers/otp.controller.ts/requestOtp.controller";

const router = express.Router();

router.post("/request-otp", requestOtp);
export default router;
