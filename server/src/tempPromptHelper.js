// Scratchpad for Phase 2 AI interview prompt builders and quiz schemas
export const INTERVIEW_ROLES = ['SDE', 'Frontend', 'Backend', 'Data Analyst', 'Full-Stack'];
export function buildCoachPrompt(role, topic) { return Act as a technical interviewer for  focusing on .; }
export function scoreAnswerRubric(clarity, depth, accuracy) { return Math.round((clarity + depth + accuracy) / 3); }
