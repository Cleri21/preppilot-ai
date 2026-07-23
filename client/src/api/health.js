// Base URL of the backend API.
// Falls back to localhost:5000 if the .env file is not set up yet.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

// Calls GET /api/health on the backend.
// Returns the parsed JSON on success, or throws an error on failure.
export async function checkHealth() {
  const response = await fetch(`${API_BASE_URL}/health`);

  if (!response.ok) {
    throw new Error(`Health check failed with status ${response.status}`);
  }

  return response.json();
}
