import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <header className={styles.navbar}>
      <div className={styles.navControls}>
        <button className={styles.navBtn} onClick={() => navigate(-1)}>
          <ChevronLeft size={20} />
        </button>
        <button className={styles.navBtn} onClick={() => navigate(1)}>
          <ChevronRight size={20} />
        </button>
      </div>

      <div className={styles.userSection}>
        {user && (
          <>
            {user.images?.[0]?.url ? (
              <img
                src={user.images[0].url}
                alt={user.display_name}
                className={styles.avatar}
              />
            ) : (
              <div className={styles.avatarPlaceholder}>
                {user.display_name?.[0]?.toUpperCase()}
              </div>
            )}
            <span className={styles.userName}>{user.display_name}</span>
            <button className={styles.logoutBtn} onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}