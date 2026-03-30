import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { exchangeToken } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import styles from "./Callback.module.css";

export default function Callback() {
  const navigate = useNavigate();
  const { reInitAuth } = useAuth();
  const handled = useRef(false);

  useEffect(() => {
    if (handled.current) return;
    handled.current = true;

    async function handle() {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      const error = params.get("error");

      if (error || !code) {
        navigate("/login");
        return;
      }

      try {
        await exchangeToken(code);
        await reInitAuth();
        navigate("/");
      } catch {
        navigate("/login");
      }
    }

    handle();
  }, [navigate, reInitAuth]);

  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
      <p className={styles.text}>Logging you in...</p>
    </div>
  );
}