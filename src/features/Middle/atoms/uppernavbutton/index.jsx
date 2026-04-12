import { Typography } from "@mui/material";
import styles from "../../middle.module.css";
export default function UpperNavButton({children}){
    return(
        <div className={styles["uppernavbutton"]}>
            <Typography>{children}</Typography>
        </div>
    );
}