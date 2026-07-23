# HANDOFF.md — PrepPilot AI

This document is the single source of truth for anyone (or any AI
assistant) picking up this project after Phase 1. Read this before writing
any new code.

---

## Current Phase: Phase 1 — COMPLETE ✅

## 1. What Was Completed in Phase 1

- Created `client/` (React + Vite, JavaScript, React Router).
- Created `server/` (Node.js + Express, ES modules).
- Implemented `GET /api/health` on the backend.
- Implemented a frontend health check (`client/src/api/health.js` +
  `HealthStatus.jsx` component) that calls the backend on page load and
  shows an online/offline status card on the Home page.
- Set up React Router with 5 pages: Home, Chat, Interview, Quiz, Plan.
- Built a responsive Navbar with active-link highlighting.
- Built a responsive Home dashboard with feature cards linking to each
  page.
- Added placeholder pages for AI Chat, Mock Interview, Quiz, and Study
  Plan (no AI logic yet — static content only). The Chat placeholder
  already renders sample content through `react-markdown` to prove the
  library is wired up correctly.
- Added security middleware: `helmet`, `cors` (restricted to the client's
  origin via `CLIENT_URL`), and `express-rate-limit` (100 requests / 15
  min per IP on all `/api` routes).
- Added a centralized error handler and a 404 handler in
  `server/src/middleware/errorHandler.js`.
- Added `.env.example` files for both `client/` and `server/`.
- Added `.gitignore` files for both `client/` and `server/`.
- Verified end-to-end: installed dependencies, ran `npm run build` on the
  client (succeeds), ran the server and confirmed `GET /api/health`
  returns `200` with correct JSON, confirmed CORS headers are present when
  the client origin calls the server, and confirmed the 404/error handler
  works for unknown routes.

## 2. What Is NOT Done Yet (Remaining Work)

- No Claude API integration (`@anthropic-ai/sdk` is not installed or used
  anywhere yet).
- `POST /api/chat`, `POST /api/interview/start`,
  `POST /api/interview/evaluate`, `POST /api/quiz/generate`, and
  `POST /api/plan/generate` are **not implemented**. They exist only as
  entries in `PROJECT_SPEC.md`.
- No streaming logic on either frontend or backend.
- No `localStorage` persistence yet (chat history, quiz scores, study
  plans are not saved).
- No Docker setup.
- No AWS App Runner deployment configuration.
- No automated tests.

## 3. Ports & URLs

| Service | Port | URL |
|---|---|---|
| Backend (Express) | 5000 | http://localhost:5000 |
| Frontend (Vite) | 5173 | http://localhost:5173 |
| Health check | — | http://localhost:5000/api/health |

These ports are configurable via `server/.env` (`PORT`) and Vite's default
(`client/vite.config.js`, `server.port`).

## 4. How to Install & Run

```powershell
# Backend
cd server
copy .env.example .env
npm install
npm run dev

# Frontend (separate terminal)
cd client
copy .env.example .env
npm install
npm run dev
```

Then open `http://localhost:5173` in a browser.

## 5. Important Files

| File | Purpose |
|---|---|
| `server/src/app.js` | Express app setup — all middleware and routes are wired here. Add new routes to this file. |
| `server/src/index.js` | Server entry point (loads `.env`, starts listening). |
| `server/src/routes/health.js` | The only implemented route so far. Use this as a template for new route files (e.g. `chat.js`, `quiz.js`). |
| `server/src/middleware/errorHandler.js` | Centralized 404 + error handler. Always call `next(error)` in new routes to route errors here instead of throwing directly. |
| `server/src/middleware/rateLimiter.js` | Rate limiting config. Adjust `windowMs`/`max` here if a specific route (e.g. streaming chat) needs different limits. |
| `client/src/App.jsx` | Route definitions. Add new `<Route>` entries here for new pages. |
| `client/src/api/health.js` | Example fetch helper. Use this pattern (`API_BASE_URL` from `import.meta.env.VITE_API_BASE_URL`) for all future API calls. |
| `client/src/pages/*.jsx` | One file per feature page. Currently placeholders — replace the placeholder content with real UI in later phases without changing the route structure. |
| `client/src/index.css` | All styling. Uses CSS variables at the top (`:root`) for colors — reuse these instead of hardcoding new colors. |

## 6. Known Issues / Things to Watch

- `express-rate-limit`'s default of 100 requests / 15 min is fine for
  Phase 1, but a future **streaming chat** endpoint may need a separate,
  more generous limiter (or an exemption) since a single conversation can
  involve many requests.
- CORS currently allows exactly one origin (`CLIENT_URL`). If the app is
  later deployed to AWS App Runner with a different client URL, remember
  to update `CLIENT_URL` in the deployed server's environment variables.
- No `localStorage` utility module exists yet. When Phase 2+ needs to
  persist chat history or quiz results, create a shared helper (e.g.
  `client/src/utils/storage.js`) rather than calling
  `localStorage` directly from components.
- The Chat placeholder page already imports `react-markdown` — when wiring
  up real streaming responses, reuse this import rather than adding a
  second Markdown library.

## 7. Next Phase (Phase 2 — Suggested Scope)

1. Add `@anthropic-ai/sdk` to `server/package.json`.
2. Add `ANTHROPIC_API_KEY` to `server/.env.example` and `server/.env`.
3. Create `server/src/routes/chat.js` implementing `POST /api/chat` with
   streaming responses (e.g. using Server-Sent Events or chunked
   responses).
4. Register the new route in `server/src/app.js`.
5. Replace the placeholder content in `client/src/pages/Chat.jsx` with a
   real chat UI: message list, input box, "send" button, and streaming
   render of the AI's response using `react-markdown`.
6. Add a `client/src/api/chat.js` fetch helper following the pattern in
   `client/src/api/health.js`.
7. Update `PROJECT_SPEC.md`'s roadmap section to mark Phase 2 as complete
   when done, and update this `HANDOFF.md` file for Phase 3.
