import express from "express";
import cors from "cors";
import helmet from "helmet";

import healthRoutes from "./routes/health.js";
import { apiRateLimiter } from "./middleware/rateLimiter.js";
import { notFoundHandler, errorHandler } from "./middleware/errorHandler.js";

const app = express();

// Security headers
app.use(helmet());

// Allow the React client (on a different port) to call this API
const clientUrl = process.env.CLIENT_URL || "http://localhost:5173";
app.use(
  cors({
    origin: clientUrl,
  })
);

// Parse incoming JSON request bodies
app.use(express.json());

// Apply rate limiting to all /api routes
app.use("/api", apiRateLimiter);

// Routes
app.use("/api", healthRoutes);

// Root route - just a friendly message, not part of the API contract
app.get("/", (req, res) => {
  res.send("PrepPilot AI server is running. Try GET /api/health");
});

// 404 handler for unknown routes
app.use(notFoundHandler);

// Centralized error handler (must be registered last)
app.use(errorHandler);

export default app;
