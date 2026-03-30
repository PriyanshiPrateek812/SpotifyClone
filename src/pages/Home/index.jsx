import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Good evening 👋</h1>
      <p className={styles.sub}>More content coming soon...</p>
    </div>
  );
}