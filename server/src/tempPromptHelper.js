// Scratchpad for Phase 2 AI interview prompt builders and quiz schemas
export const INTERVIEW_ROLES = ['SDE', 'Frontend', 'Backend', 'Data Analyst', 'Full-Stack'];
export function buildCoachPrompt(role, topic) { return Act as a technical interviewer for  focusing on .; }
export function scoreAnswerRubric(clarity, depth, accuracy) { return Math.round((clarity + depth + accuracy) / 3); }
export const DIFFICULTY_LEVELS = ['easy', 'medium', 'hard'];
export function formatQuizPayload(questions) { return questions.map((q, idx) => ({ id: idx + 1, ...q })); }
export function calculateStudyStreak(dates) { return Array.isArray(dates) ? dates.length : 0; }
export const MAX_PROMPT_TOKENS = 1500;
export function sanitizeStudentInput(text) { return String(text || '').trim().slice(0, MAX_PROMPT_TOKENS); }
export function buildStudyPlanTemplate(weeks, targetRole) { return { weeks, targetRole, modules: [] }; }
export const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
export function isValidHealthResponse(res) { return res && res.status === 'ok'; }
// Scratchpad for Phase 2 AI interview prompt builders and quiz schemas
export const INTERVIEW_ROLES = ['SDE', 'Frontend', 'Backend', 'Data Analyst', 'Full-Stack'];
