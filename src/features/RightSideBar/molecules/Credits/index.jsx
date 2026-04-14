import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import CreditsHeader from "../../atoms/CreditsHeader";
import CreditsDivider from "../../atoms/CreditsDetails";
export default function Credits(){
    return(
        <Box>
            <CreditsHeader />
            <CreditsDivider />         
        </Box>
    )
}