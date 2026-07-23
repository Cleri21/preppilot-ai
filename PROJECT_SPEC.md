# PROJECT_SPEC.md — PrepPilot AI

## 1. Purpose

PrepPilot AI is a college project that helps students prepare for placement
(campus recruitment) interviews. It combines an AI chat assistant, mock
interviews, answer evaluation, quiz generation, and study-plan generation
into a single web app.

## 2. Technology Stack

### Frontend (`client/`)
| Tool | Purpose |
|---|---|
| React (Vite) | UI framework and dev server |
| JavaScript | No TypeScript |
| React Router v6 | Client-side page navigation |
| Plain CSS | Responsive layout, no CSS framework |
| Fetch API | Talking to the backend |
| react-markdown | Rendering AI-generated Markdown responses |

### Backend (`server/`)
| Tool | Purpose |
|---|---|
| Node.js + Express | HTTP server and routing |
| ES modules | `import`/`export` syntax throughout |
| dotenv | Loading environment variables from `.env` |
| cors | Restricting cross-origin access to the client only |
| helmet | Security headers |
| express-rate-limit | Basic abuse/DoS protection on `/api` routes |

### Future AI Integration
| Tool | Purpose |
|---|---|
| @anthropic-ai/sdk | Calling the Claude API for chat, interviews, quizzes, and plans |

### Storage
- Browser `localStorage` only.
- **No database** (no MongoDB, no SQL).
- **No authentication / login system.**

### Deployment (future)
- Docker containers for client and server
- AWS App Runner

## 3. Final Feature List

1. **Streaming AI placement chat** — real-time chat with an AI assistant
   about placement prep topics.
2. **Mock interview** — AI generates interview questions; user answers them
   in a simulated session.
3. **Interview-answer evaluation** — AI scores and gives feedback on a
   user's answer to an interview question.
4. **Quiz generator** — AI generates multiple-choice quizzes on a chosen
   topic.
5. **Study-plan generator** — AI generates a personalized, day-by-day study
   plan based on user input (target role, timeline, current level).

## 4. Final API Routes

| Method | Route | Description |
|---|---|---|
| GET | `/api/health` | Health check — confirms the server is running. |
| POST | `/api/chat` | Streaming AI chat endpoint. |
| POST | `/api/interview/start` | Starts a mock interview session. |
| POST | `/api/interview/evaluate` | Evaluates a user's interview answer. |
| POST | `/api/quiz/generate` | Generates a quiz on a given topic. |
| POST | `/api/plan/generate` | Generates a personalized study plan. |

> Only `GET /api/health` is implemented in Phase 1. The other routes are
> planned for later phases and are documented here for reference.

## 5. Phased Roadmap

### Phase 1 — Project Skeleton (this phase)
- Client + server scaffolding
- Health check (frontend ↔ backend)
- Routing, dashboard, placeholder pages
- Security middleware (CORS, Helmet, rate limiting)
- Centralized error handling
- Project documentation

### Phase 2 (planned)
- Integrate `@anthropic-ai/sdk`
- Implement `POST /api/chat` with streaming responses
- Build the real AI Chat UI (message list, input box, streaming render
  with `react-markdown`)

### Phase 3 (planned)
- Implement `POST /api/interview/start` and `POST /api/interview/evaluate`
- Build the Mock Interview UI (question flow, answer input, feedback view)

### Phase 4 (planned)
- Implement `POST /api/quiz/generate`
- Build the Quiz UI (question rendering, answer selection, scoring)

### Phase 5 (planned)
- Implement `POST /api/plan/generate`
- Build the Study Plan UI
- Persist user data (chat history, quiz scores, plans) in `localStorage`

### Phase 6 (planned)
- Dockerize client and server
- Deploy to AWS App Runner
- Add production environment configuration

## 6. Explicit Constraints (all phases)

- No database of any kind (no MongoDB, no SQL database).
- No authentication or user accounts.
- No server-side session storage — any persistence is client-side
  (`localStorage`) only.
- ES modules only on the backend (no CommonJS `require`).
- Client and server remain fully separate npm projects.
