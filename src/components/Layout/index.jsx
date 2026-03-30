import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Player from "../Player";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainWrapper}>
        <Navbar />
        <main className={styles.main}>
          {children}
        </main>
      </div>
      <Player />
    </div>
  );
}