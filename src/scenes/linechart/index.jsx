import { useTheme } from "@mui/material"
import { tokens } from "../../theme"

export default function Linechart(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    
    return (
        <>
            Line
        </>
    )
}