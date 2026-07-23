// This is a Phase 1 placeholder. In a later phase, this page will connect
// to POST /api/quiz/generate.
export default function Quiz() {
  return (
    <div className="page">
      <h1>📝 Quiz</h1>
      <p className="page-subtitle">
        Test your technical and aptitude knowledge with quick quizzes.
      </p>

      <div className="placeholder-card">
        <p>This feature is coming soon.</p>
        <p>You'll be able to:</p>
        <ul>
          <li>Generate quizzes on any topic</li>
          <li>Answer multiple-choice questions</li>
          <li>See your score instantly</li>
        </ul>
      </div>
    </div>
  );
}
