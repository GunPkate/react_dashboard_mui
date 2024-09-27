import { Typography, Box, useTheme  } from "@mui/material"
import { tokens } from "../theme"

export default function Header({ title, Subtitle }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return <Box mb="20px">
        <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
        >
            {title}
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[400]}>
            {Subtitle}
        </Typography>

    </Box>
}