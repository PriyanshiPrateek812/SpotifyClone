import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "../../middle.module.css";
export default function Albums() {
  return (
    <Card sx={{ maxWidth: 150, maxHeight: 180 }}>
      <CardMedia
        sx={{ height: 150, width: 150 }}
        image="public/album.webp"
        title="green iguana"
      />
      <CardContent className={styles.cardContent}>
        {/* <Typography gutterBottom component="div"> */}
          Lizard
        {/* </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
