import styles from "../middle.module.css"
import UpperNav from '../molecules/upperNav';
import List from '../molecules/List';
import DailyMix from "../molecules/DailyMix";

export default function Middle(){
  return (
    <div className={styles["middle-container"]}>
      <div className={styles.middleBox}> 
        <UpperNav />
        <List />
        <DailyMix />
      </div>
    </div>
  );
}