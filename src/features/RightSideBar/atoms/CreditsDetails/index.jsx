import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import styles from "../../music.module.css";
export default function CreditsDivider() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
            <div className={styles.songDetailsCardContainer}>
                <div>
                    <Typography> Main Artist Name </Typography>
                    <Typography> Main Artist </Typography>
                </div>
                <div className={styles.songDetailsbuttons}>
                    <Typography>
                        Follow button
                    </Typography>
                </div>                
            </div>
            <div className={styles.songDetailsCardContainer}>
                <div>
                    <Typography> Lyricist Name </Typography>
                    <Typography> Lyricist • Composer </Typography>
                </div>                
            </div>
            <div className={styles.songDetailsCardContainer}>
                <div>
                    <Typography> Graphic Designer Name </Typography>
                    <Typography> Graphic Desinger </Typography>
                </div>                
            </div>
      </Box>
      <Divider />
    </Card>
  );
}
