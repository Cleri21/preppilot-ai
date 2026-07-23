# PROMPT_LOG.md — PrepPilot AI

This file logs the prompts used to build this project with AI assistance,
along with what each prompt produced. This is kept for academic
transparency and so future phases can be traced back to their originating
instructions.

---

## Phase 1 — Project Skeleton

**Date:** 2026-07-23

**Prompt (summary):**
> Build Phase 1 of PrepPilot AI, an AI-powered placement interview coach.
> Create a React + Vite client and a Node.js + Express (ES modules) server.
> Implement only `GET /api/health` and a frontend-to-backend health check.
> Set up React Router with a responsive home dashboard and placeholder
> pages for AI Chat, Mock Interview, Quiz, and Study Plan. Add CORS,
> Helmet, and rate limiting on the server, plus a centralized error
> handler. Do not implement Claude API features, MongoDB, or
> login/signup. Produce `.env.example`, `.gitignore`, `README.md`,
> `PROJECT_SPEC.md`, `HANDOFF.md`, and `PROMPT_LOG.md`.

**What was produced:**
- Full `client/` Vite + React project:
  - `App.jsx`, `main.jsx`, `index.css`
  - `components/Navbar.jsx`, `components/HealthStatus.jsx`
  - `pages/Home.jsx`, `pages/Chat.jsx`, `pages/Interview.jsx`,
    `pages/Quiz.jsx`, `pages/Plan.jsx`
  - `api/health.js` (fetch helper)
  - `.env.example`, `.gitignore`
- Full `server/` Express project:
  - `src/index.js` (entry point), `src/app.js` (app + middleware wiring)
  - `src/routes/health.js` (`GET /api/health`)
  - `src/middleware/rateLimiter.js`, `src/middleware/errorHandler.js`
  - `.env.example`, `.gitignore`
- Root documentation: `README.md`, `PROJECT_SPEC.md`, `HANDOFF.md`,
  `PROMPT_LOG.md` (this file).

**Verification performed:**
- `npm install` run successfully in both `client/` and `server/`.
- `npm run build` run successfully in `client/` (no errors).
- `server/src/index.js` started successfully and
  `GET /api/health` verified to return `200` with the expected JSON
  shape (`status`, `service`, `timestamp`).
- Unknown route (`GET /api/doesnotexist`) verified to return `404`
  through the centralized error handler.
- Both client (port 5173) and server (port 5000) run simultaneously;
  cross-origin request from the client's origin confirmed to succeed
  with correct `Access-Control-Allow-Origin` and rate-limit headers
  present in the response.

**Outcome:** Phase 1 complete. See `HANDOFF.md` for full details and
Phase 2 scope.

---

## Phase 2 — (not started)

_To be filled in when Phase 2 begins._
