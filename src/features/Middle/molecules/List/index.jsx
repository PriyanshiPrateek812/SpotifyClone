import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import styles from "../../middle.module.css";
const cards = [
  {
    id: 1,
    title: 'Happy Ending',
  },
  {
    id: 2,
    title: 'Animals',
  },
];
export default function List(){
    const [selectedCard, setSelectedCard] = React.useState(0);
    return(
        <Box className={styles["list-container"]}>
      {cards.map((card, index) => (
        <Card key={card.id}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <div className={`${styles.upperNav} ${styles.list}`}>
                <img width="50px" height="50px" src="album.webp"/>                
                <Typography>
                    {card.title}
                </Typography>
            </div>
            
          </CardActionArea>
        </Card>
      ))}
    </Box>
    )
}