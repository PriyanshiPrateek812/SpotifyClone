import { Typography } from "@mui/material";
import styles from "../../music.module.css";
export default function CreditsHeader(){
    return(
        <div className={styles.songDetailsCardContainer}>
            <Typography>Credits</Typography>
            <div className={styles.songDetailsbuttons}>
                <Typography>Show all</Typography>
            </div>
            
        </div>
    )
}