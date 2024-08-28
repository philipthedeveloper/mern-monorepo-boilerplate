import "express-async-errors";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import http from "http";
import { envConfigs } from "./config";
import connectDB from "./connection/mongodb";
import {
  errorHandler,
  methodChecker,
  requestLogger,
  routeNotFound,
} from "./middlewares";

// Configure env
dotenv.config();
const { CORS_ORIGINS, PORT, HOSTNAME } = envConfigs;

// Initialize an express app
const app = express();

// Create node server
const server = http.createServer(app);

// Create a root router
const appRouter = express.Router();

// Middlewares
app.use(
  cors({
    origin: CORS_ORIGINS,
    credentials: true,
  })
);

app.use(methodChecker); // Checks if the incoming request method is supported

app.use(express.urlencoded({ extended: true })); // Parse urlencoded data in request body
app.use(express.json({})); // Parse json data in request body

app.use(requestLogger); // Log any incoming request to the console

app.use("/monorepo/api/v1", appRouter);

app.get("/", async (req, res) => {
  return res.send({
    success: true,
    message: "Hello! Monorepo Backend system says h1!👋",
  });
});

// All route that are not handled from the top will be handled here
app.all("*", routeNotFound); // Returns a 404 response for such routes
app.use(errorHandler); // Handles all error in the app

server.on("error", (error: any) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Trying a different port...`);
    const NEW_PORT = Number(PORT) + 1;
    server.listen(NEW_PORT, HOSTNAME || "", () => {
      console.log(`Server is running on http://${HOSTNAME}:${NEW_PORT}`);
    });
  } else {
    console.error("Server error:", error);
  }
});

const startServer = () => {
  server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
  });
};

// connectDB(startServer)
startServer();
