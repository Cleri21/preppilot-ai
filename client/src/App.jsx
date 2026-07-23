import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Chat from "./pages/Chat.jsx";
import Interview from "./pages/Interview.jsx";
import Quiz from "./pages/Quiz.jsx";
import Plan from "./pages/Plan.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/plan" element={<Plan />} />
          <Route
            path="*"
            element={
              <div className="page">
                <h1>404</h1>
                <p>Page not found.</p>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
