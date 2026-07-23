# PrepPilot AI – AI-Powered Placement Interview Coach

PrepPilot AI helps college students prepare for placement interviews using an
AI assistant, mock interviews, answer evaluation, quizzes, and study plans.

This repository is currently in **Phase 1**: the project skeleton. It sets up
the client and server, wires them together with a health check, and adds
placeholder pages for every planned feature. No AI features are implemented
yet — see `PROJECT_SPEC.md` and `HANDOFF.md` for the full roadmap.

## Tech Stack

**Frontend (`client/`)**
- React 18 + Vite
- JavaScript (no TypeScript)
- React Router v6
- Plain, responsive CSS
- Fetch API
- react-markdown (used to preview formatted AI responses later)

**Backend (`server/`)**
- Node.js + Express (ES modules)
- dotenv
- cors
- helmet
- express-rate-limit

**Storage:** browser `localStorage` only. No database, no authentication.

## Folder Structure

```
PrepPilot-AI/
├── client/                 # React + Vite frontend
│   ├── src/
│   │   ├── api/            # fetch helpers for calling the backend
│   │   ├── components/     # Navbar, HealthStatus
│   │   ├── pages/           # Home, Chat, Interview, Quiz, Plan
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── .env.example
├── server/                 # Express backend
│   ├── src/
│   │   ├── routes/          # health.js (GET /api/health)
│   │   ├── middleware/      # rateLimiter.js, errorHandler.js
│   │   ├── app.js
│   │   └── index.js
│   ├── package.json
│   └── .env.example
├── README.md
├── PROJECT_SPEC.md
├── HANDOFF.md
└── PROMPT_LOG.md
```

## Prerequisites

- Node.js 18 or later (Node 20 LTS recommended)
- npm (comes with Node.js)

## 1. Install dependencies

Open **two terminals** (or run one after the other).

**Server:**
```powershell
cd server
npm install
```

**Client:**
```powershell
cd client
npm install
```

## 2. Configure environment variables

**Server** — copy the example file and adjust if needed:
```powershell
cd server
copy .env.example .env
```
`server/.env` will contain:
```
PORT=5000
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

**Client** — copy the example file:
```powershell
cd client
copy .env.example .env
```
`client/.env` will contain:
```
VITE_API_BASE_URL=http://localhost:5000/api
```

## 3. Run the app

**Start the backend** (from `server/`):
```powershell
npm run dev
```
You should see:
```
PrepPilot AI server listening on http://localhost:5000
```

**Start the frontend** (from `client/`, in a separate terminal):
```powershell
npm run dev
```
Vite will print a local URL, typically:
```
http://localhost:5173
```

Open that URL in your browser. The Home dashboard will show a **health
status card** that turns green ("Backend is online") once it successfully
reaches the server.

## 4. Test GET /api/health

**Option A — Browser**
Visit: `http://localhost:5000/api/health`
You should see JSON like:
```json
{
  "status": "ok",
  "service": "preppilot-server",
  "timestamp": "2026-07-23T12:00:00.000Z"
}
```

**Option B — PowerShell**
```powershell
Invoke-RestMethod http://localhost:5000/api/health
```

**Option C — curl (if installed)**
```powershell
curl http://localhost:5000/api/health
```

**Option D — Frontend**
With both servers running, open `http://localhost:5173` and check the
health card on the Home page. It calls the same endpoint using `fetch`.

## Notes

- CORS is restricted to the URL set in `CLIENT_URL` (defaults to
  `http://localhost:5173`).
- Helmet adds standard security headers to every response.
- All `/api` routes are rate-limited (100 requests per 15 minutes per IP by
  default) using `express-rate-limit`.
- Unknown routes return a `404` and all errors flow through a single
  centralized error handler in `server/src/middleware/errorHandler.js`.

See `PROJECT_SPEC.md` for the full feature roadmap and `HANDOFF.md` for
what's done, what's left, and how to pick up Phase 2.
