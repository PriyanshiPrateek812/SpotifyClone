import styles from "./Player.module.css";

export default function Player() {
  return (
    <div className={styles.player}>
      <div className={styles.trackInfo}>
        <div className={styles.imgPlaceholder} />
        <div>
          <p className={styles.trackName}>No track playing</p>
          <p className={styles.artistName}>—</p>
        </div>
      </div>
      <div className={styles.controls}>
        <p className={styles.hint}>Player coming soon</p>
      </div>
      <div className={styles.volume} />
    </div>
  );
}