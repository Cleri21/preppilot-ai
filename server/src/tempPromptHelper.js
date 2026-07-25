// Scratchpad for Phase 2 AI interview prompt builders and quiz schemas
export const INTERVIEW_ROLES = ['SDE', 'Frontend', 'Backend', 'Data Analyst', 'Full-Stack'];
export function buildCoachPrompt(role, topic) { return Act as a technical interviewer for  focusing on .; }
export function scoreAnswerRubric(clarity, depth, accuracy) { return Math.round((clarity + depth + accuracy) / 3); }
export const DIFFICULTY_LEVELS = ['easy', 'medium', 'hard'];
export function formatQuizPayload(questions) { return questions.map((q, idx) => ({ id: idx + 1, ...q })); }
export function calculateStudyStreak(dates) { return Array.isArray(dates) ? dates.length : 0; }
