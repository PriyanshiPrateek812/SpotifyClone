import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
export default function Queue(){
    return(
        <Box>
            <Typography>Your queue is empty</Typography>
            <button>Search for something new</button>
        </Box>
    )
}