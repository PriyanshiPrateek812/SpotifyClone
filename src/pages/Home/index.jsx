import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "./Home.module.css";

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Spotify Clone 🎵</h1>
      {user && (
        <div className={styles.userCard}>
          {user.images?.[0]?.url && (
            <img
              src={user.images[0].url}
              alt={user.display_name}
              className={styles.avatar}
            />
          )}
          <p className={styles.name}>{user.display_name}</p>
          <p className={styles.email}>{user.email}</p>
        </div>
      )}
      <button className={styles.logoutBtn} onClick={logout}>
        Logout
      </button>
    </div>
  );
}