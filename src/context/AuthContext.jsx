import { createContext, useContext, useState } from "react";
import { getValidToken, logout as logoutFn } from "../services/authService";
import { getCurrentUser } from "../services/spotifyService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  async function initAuth() {
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

  function logout() {
    setUser(null);
    setToken(null);
    logoutFn();
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, logout, initAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}