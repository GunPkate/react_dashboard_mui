import { useTheme } from "@emotion/react"
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { Accordion, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"


export default function Faq(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <Box m="10px">
            <Header Subtitle="FAQ"></Header>


        </Box>

    )
}