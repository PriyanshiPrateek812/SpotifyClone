import styles from "../../music.module.css"
import { Typography } from '@mui/material';
import IosShareTwoToneIcon from '@mui/icons-material/IosShareTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
export default function SongDetailsCard(){
    return(
        <div className={styles.songDetailsCardContainer}>
            <div>
                <Typography>Music name</Typography>
                <Typography>Singer name</Typography>
            </div>
            <div className={styles.songDetailsbuttons}>
                <button><IosShareTwoToneIcon /></button>
                <button><AddCircleOutlineTwoToneIcon /></button>
            </div>
            
        </div>
    )
}