import { createContext, useContext, useState, useRef } from "react";
import { getValidToken, logout as logoutFn } from "../services/authService";
import { getCurrentUser } from "../services/spotifyService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); // ← true so ProtectedRoute waits
  const initialized = useRef(false);

  async function initAuth() {
    // Prevent running multiple times simultaneously
    if (initialized.current) return;
    initialized.current = true;

    setLoading(true);
    try {
      const validToken = await getValidToken();
      if (validToken) {
        setToken(validToken);
        const { data } = await getCurrentUser();
        setUser(data);
      }
    } catch {
      logoutFn();
    } finally {
      setLoading(false);
    }
  }

  // Allow callback page to re-run auth after token exchange
  async function reInitAuth() {
    initialized.current = false;
    await initAuth();
  }

  function logout() {
    setUser(null);
    setToken(null);
    initialized.current = false;
    logoutFn();
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, logout, initAuth, reInitAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}