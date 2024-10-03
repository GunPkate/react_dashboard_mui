import { useTheme } from "@emotion/react"
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"


export default function Faq(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <Box m="10px">
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h4">Important Question</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography color={colors.grey[200]} variant="h5">Important Question</Typography>
                </AccordionDetails>
            </Accordion>
        </Box>

    )
}