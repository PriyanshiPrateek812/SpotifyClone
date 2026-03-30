import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Callback from "./pages/Callback";
import Home from "./pages/Home";

function ProtectedRoute({ children }) {
  const { token, loading } = useAuth();
  
  if (loading) return (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      minHeight: "100vh", 
      background: "#000", 
      color: "#1db954",
      fontSize: "1.2rem"
    }}>
      Loading...
    </div>
  );

  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  const { initAuth } = useAuth();

  // Check for existing token on every app load
  useEffect(() => {
    initAuth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/callback" element={<Callback />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}