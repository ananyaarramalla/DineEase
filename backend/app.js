import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';
import loginRouter from './routes/login.js';

const app = express();
dotenv.config({ path: "./config/config.env" });




app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount reservation and login routers
app.use("/api/v1/reservation", reservationRouter);
app.use("/api/login", loginRouter); // Mount the login route at the root path

// Establish database connection
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;
