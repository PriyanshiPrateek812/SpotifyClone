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
import "../styles.css"

const DRAWER_WIDTH = 280;
const COLLAPSED_WIDTH = 70;

export default function Playlists(){
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      className="drawer"
      style={{
        width: open ? 280 : 70,
      }}
    >
      <Box className="toggleBox">
        <IconButton onClick={toggleDrawer} className="toggleButton">
          <ChevronLeftIcon />
        </IconButton>
      </Box>

      <List className="list">
        <ListItem 
          button 
          className={`listItem ${open ? 'listItemOpen' : 'listItemCollapsed'}`}
        >
          <ListItemIcon className={`listItemIcon ${!open ? 'listItemIconCollapsed' : ''}`}>
            <HomeIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Home" className="listItemText" />}
        </ListItem>
        <ListItem 
          button 
          className={`listItem ${open ? 'listItemOpen' : 'listItemCollapsed'}`}
        >
          <ListItemIcon className={`listItemIcon ${!open ? 'listItemIconCollapsed' : ''}`}>
            <SearchIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Search" className="listItemText" />}
        </ListItem>
        <ListItem 
          button 
          className={`listItem ${open ? 'listItemOpen' : 'listItemCollapsed'}`}
        >
          <ListItemIcon className={`listItemIcon ${!open ? 'listItemIconCollapsed' : ''}`}>
            <FavoriteBorderIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Liked Songs" className="listItemText" />}
        </ListItem>
        <ListItem 
          button 
          className={`listItem ${open ? 'listItemOpen' : 'listItemCollapsed'}`}
        >
          <ListItemIcon className={`listItemIcon ${!open ? 'listItemIconCollapsed' : ''}`}>
            <QueueMusicIcon />
          </ListItemIcon>
          {open && <ListItemText primary="Your Library" className="listItemText" />}
        </ListItem>
      </List>
    </Drawer>
  );
}