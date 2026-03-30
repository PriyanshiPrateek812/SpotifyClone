import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserPlaylists } from "../../services/spotifyService";
import { useAuth } from "../../context/AuthContext";
import { Home, Search, Library, Heart } from "lucide-react";
import styles from "./Sidebar.module.css";

const navItems = [
  { to: "/", icon: <Home size={22} />, label: "Home" },
  { to: "/search", icon: <Search size={22} />, label: "Search" },
  { to: "/library", icon: <Library size={22} />, label: "Your Library" },
  { to: "/liked", icon: <Heart size={22} />, label: "Liked Songs" },
];

export default function Sidebar() {
  const { token } = useAuth();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    if (!token) return;
    getUserPlaylists()
      .then(({ data }) => setPlaylists(data.items))
      .catch(console.error);
  }, [token]);

  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
        <span>Spotify Clone</span>
      </div>

      {/* Nav Links */}
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ""}`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Playlists */}
      <div className={styles.playlistSection}>
        <p className={styles.playlistTitle}>PLAYLISTS</p>
        <div className={styles.playlistList}>
          {playlists.map((playlist) => (
            <NavLink
              key={playlist.id}
              to={`/playlist/${playlist.id}`}
              className={({ isActive }) =>
                `${styles.playlistItem} ${isActive ? styles.active : ""}`
              }
            >
              {playlist.images?.[0]?.url ? (
                <img
                  src={playlist.images[0].url}
                  alt={playlist.name}
                  className={styles.playlistImg}
                />
              ) : (
                <div className={styles.playlistImgPlaceholder} />
              )}
              <span className={styles.playlistName}>{playlist.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </aside>
  );
}