import express from "express";
import ticketRoutes from './routes/ticketRoutes';
import authRouter from './routes/authRoutes';

const app = express();
app.use(express.json());

app.use("/api", ticketRoutes);
app.use("/api/auth", authRouter);

export default app;
