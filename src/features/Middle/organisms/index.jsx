import "../styles.css"
import UpperNav from '../molecules/upperNav';
import List from '../molecules/List';

export default function Middle(){
  return (
    <div className="middle-container">
    <UpperNav />
    <List />
    </div>
  );
}