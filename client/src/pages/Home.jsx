import { Link } from "react-router-dom";
import HealthStatus from "../components/HealthStatus.jsx";

const features = [
  {
    to: "/chat",
    icon: "💬",
    title: "AI Chat",
    description:
      "Ask placement-related questions and chat with an AI assistant.",
  },
  {
    to: "/interview",
    icon: "🎤",
    title: "Mock Interview",
    description: "Practice a simulated interview with realistic questions.",
  },
  {
    to: "/quiz",
    icon: "📝",
    title: "Quiz",
    description: "Test your knowledge with auto-generated quizzes.",
  },
  {
    to: "/plan",
    icon: "📅",
    title: "Study Plan",
    description: "Get a personalized study plan for your placement prep.",
  },
];

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1>Welcome to PrepPilot AI</h1>
        <p>
          Your AI-powered placement interview coach. Practice, evaluate, and
          plan your way to placement success.
        </p>
      </section>

      <HealthStatus />

      <section className="card-grid">
        {features.map((feature) => (
          <Link to={feature.to} key={feature.to} className="feature-card">
            <span className="feature-icon">{feature.icon}</span>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
