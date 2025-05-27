import express, { Request, Response, Router } from "express";
import authRouter from "./routes/auth.routes";
import { errorHandler } from "./middlewares/errorHandler.middleware";

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

// Error handling middleware
// Always place error handler after all routes
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
