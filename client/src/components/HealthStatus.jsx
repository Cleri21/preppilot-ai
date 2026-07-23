import { useEffect, useState } from "react";
import { checkHealth } from "../api/health.js";

// Shows whether the backend server is reachable.
// Status can be: "checking" | "online" | "offline"
export default function HealthStatus() {
  const [status, setStatus] = useState("checking");
  const [details, setDetails] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function runCheck() {
      try {
        const data = await checkHealth();
        if (isMounted) {
          setStatus("online");
          setDetails(data);
        }
      } catch (err) {
        if (isMounted) {
          setStatus("offline");
          setDetails(null);
        }
      }
    }

    runCheck();

    return () => {
      isMounted = false;
    };
  }, []);

  const statusText = {
    checking: "Checking backend...",
    online: "Backend is online",
    offline: "Backend is offline",
  }[status];

  return (
    <div className={`health-card health-${status}`}>
      <span className="health-dot" />
      <div>
        <p className="health-text">{statusText}</p>
        {status === "online" && details && (
          <p className="health-subtext">
            Service: {details.service} • Checked at{" "}
            {new Date(details.timestamp).toLocaleTimeString()}
          </p>
        )}
        {status === "offline" && (
          <p className="health-subtext">
            Make sure the server is running on the URL set in
            VITE_API_BASE_URL.
          </p>
        )}
      </div>
    </div>
  );
}
