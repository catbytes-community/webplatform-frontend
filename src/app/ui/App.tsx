import "../styles/reset.css";
import "../styles/variables/global.css";
import "../styles/index.css";
import { Suspense } from "react";
import { AppRouter } from "../providers/Router";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      console.log("Logging out user...");
      // Clear any frontend state (Redux, Context, etc.)
      navigate("/login"); // Redirect to login page
    };

    // Listen for logout event
    window.addEventListener("logout", handleLogout);

    return () => {
      window.removeEventListener("logout", handleLogout);
    };
  },[navigate]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* общий layout */}
        <AppRouter />
        {/* общий layout */}
      </Suspense>
    </div>
  );
}

export default App;
