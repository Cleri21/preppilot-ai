import { Router } from "express";

const router = Router();

// GET /api/health
// Simple endpoint the frontend calls to check that the backend is alive.
// No database or external services are checked in Phase 1.
router.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "preppilot-server",
    timestamp: new Date().toISOString(),
  });
});

export default router;
