import { Typography } from "@mui/material";

export default function UpperNavButton({children}){
    return(
        <div className="uppernavbutton">
            <Typography>{children}</Typography>
        </div>
    );
}