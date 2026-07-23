import ReactMarkdown from "react-markdown";

// This is a Phase 1 placeholder. In a later phase, this page will connect
// to POST /api/chat and stream real AI responses from Claude.
const placeholderMessage = `**AI Chat is coming soon.**

In a future phase, you'll be able to:

- Ask placement-related questions
- Get instant AI-generated answers
- See responses streamed in real time`;

export default function Chat() {
  return (
    <div className="page">
      <h1>💬 AI Chat</h1>
      <p className="page-subtitle">
        Chat with an AI assistant about placement preparation.
      </p>

      <div className="placeholder-card">
        <ReactMarkdown>{placeholderMessage}</ReactMarkdown>
      </div>
    </div>
  );
}
