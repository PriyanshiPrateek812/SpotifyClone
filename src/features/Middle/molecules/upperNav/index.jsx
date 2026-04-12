import UpperNavButton from "../../atoms/uppernavbutton";
import styles from "../../middle.module.css"
const items = ['All', 'Music', 'Podcasts'];
export default function UpperNav(){
    return(
        <div className={styles.upperNav}>
            {items.map((item, index)=>(
                <UpperNavButton key={index}>{item}</UpperNavButton>
            ))}
        </div>
    )
}