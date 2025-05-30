import express from "express";
import { requestOtp } from "../controllers/otp.controller.ts/requestOtp.controller";
import { verifyOtp } from "../controllers/otp.controller.ts/verifyOtp.controller";

const router = express.Router();

router.post("/request-otp", requestOtp);
router.post("/verify-otp", verifyOtp);

export default router;
