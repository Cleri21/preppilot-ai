import { NavLink } from "react-router-dom";

// Adds the "active" class to whichever link matches the current route.
function linkClass({ isActive }) {
  return isActive ? "nav-link nav-link-active" : "nav-link";
}

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand">
          🚀 PrepPilot AI
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/chat" className={linkClass}>
            AI Chat
          </NavLink>
          <NavLink to="/interview" className={linkClass}>
            Mock Interview
          </NavLink>
          <NavLink to="/quiz" className={linkClass}>
            Quiz
          </NavLink>
          <NavLink to="/plan" className={linkClass}>
            Study Plan
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
