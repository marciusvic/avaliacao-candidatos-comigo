import express from "express";
import cors from "cors";
import ticketRoutes from './routes/ticketRoutes';
import authRouter from './routes/authRoutes';

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
  }));
app.use(express.json());

app.use("/api", ticketRoutes);
app.use("/api/auth", authRouter);

export default app;
