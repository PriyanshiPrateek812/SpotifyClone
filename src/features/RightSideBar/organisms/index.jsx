import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import Box from '@mui/material/Box';
import styles from "../music.module.css"
import { Typography } from '@mui/material';
import AlbumPicture from '../molecules/Album'
import SongDetailsCard from '../molecules/SongDetailsCard';
import Credits from '../molecules/Credits';
import Queue from '../molecules/Queue';
const DRAWER_WIDTH = 280;
const COLLAPSED_WIDTH = 70;

export default function Music(){
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  console.log("Styles: "+JSON.stringify(styles, null, 2));
  return (
    <div className={styles.playlists}>
    <Drawer
      variant="permanent"
      className={styles.drawer}
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          backgroundColor: '#121212',
          color: '#fff',
          width: open ? 320 : 70,
          transition: 'width 0.3s ease',
          overflowX: 'hidden',
          boxSizing: 'border-box',
          position: 'relative',
        }
      }}
    >
        <Box className={styles.toggleBox}>
            <IconButton onClick={toggleDrawer} className={styles.toggleButton}>
            <ChevronLeftIcon />
            </IconButton>
        </Box>
        {open?
            <div className={styles.musicContainer}>
                <Typography>Music name</Typography>
                <AlbumPicture />
                <SongDetailsCard />
                <Credits />
                <Queue />
            </div>
            :
            <></>
        }
      {/* <Box className={styles.toggleBox}>
        <IconButton onClick={toggleDrawer} className={styles.toggleButton}>
          <ChevronLeftIcon />
        </IconButton>
      </Box> */}

      {/* <List className={styles.list}>
        <ListItem 
          button 
          className={`${styles.listItem} ${open ? styles.listItemOpen : styles.listItemCollapsed}`}
        >
          <ListItemIcon className={`${styles.listItemIcon} ${!open ? styles.listItemIconCollapsed : ''}`}>
            <HomeIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Home" className={styles.listItemText} />}
        </ListItem>
        <ListItem 
          button 
          className={`${styles.listItem} ${open ? styles.listItemOpen : styles.listItemCollapsed}`}
        >
          <ListItemIcon className={`${styles.listItemIcon} ${!open ? styles.listItemIconCollapsed : ''}`}>
            <SearchIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Search" className={styles.listItemText} />}
        </ListItem>
        <ListItem 
          button 
          className={`${styles.listItem} ${open ? styles.listItemOpen : styles.listItemCollapsed}`}
        >
          <ListItemIcon className={`${styles.listItemIcon} ${!open ? styles.listItemIconCollapsed : ''}`}>
            <FavoriteBorderIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Liked Songs" className={styles.listItemText} />}
        </ListItem>
        <ListItem 
          button 
          className={`${styles.listItem} ${open ? styles.listItemOpen : styles.listItemCollapsed}`}
        >
          <ListItemIcon className={`${styles.listItemIcon} ${!open ? styles.listItemIconCollapsed : ''}`}>
            <QueueMusicIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Your Library" className={styles.listItemText} />}
        </ListItem>
      </List> */}
    </Drawer>
    </div>
  );
}