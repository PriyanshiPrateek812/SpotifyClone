import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { exchangeToken } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import styles from "./Callback.module.css";

export default function Callback() {
  const navigate = useNavigate();
  const { initAuth } = useAuth();
  const handled = useRef(false);

  useEffect(() => {
    if (handled.current) return;
    handled.current = true;

    async function handle() {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      const error = params.get("error");

      console.log("🔵 Callback triggered");
      console.log("🔵 Code:", code);
      console.log("🔵 Error:", error);

      if (error || !code) {
        console.log("🔴 No code or error present, redirecting to login");
        navigate("/login");
        return;
      }

      try {
        console.log("🟡 Exchanging token...");
        const tokenData = await exchangeToken(code);
        console.log("🟡 Token exchange result:", tokenData);
        await initAuth();
        navigate("/");
      } catch (err) {
        console.log("🔴 Error during token exchange:", err);
        navigate("/login");
      }
    }

    handle();
  }, [navigate, initAuth]);

  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
      <p className={styles.text}>Logging you in...</p>
    </div>
  );
}