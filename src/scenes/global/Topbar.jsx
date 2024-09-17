import { Box, IconButton, InputBase, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext, tokens } from "../../theme"
import LightMode from "@mui/icons-material/LightModeOutlined"
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotAccessibleOutlinedIcon from "@mui/icons-material/NotAccessibleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";


export default function Topbar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>

            {/* Icons */}
            <Box display="flex">
                <IconButton><LightModeOutlinedIcon /></IconButton>
                <IconButton><DarkModeOutlinedIcon /></IconButton>
                <IconButton><NotAccessibleOutlinedIcon/></IconButton>
                <IconButton><SettingsOutlinedIcon/></IconButton>
                <IconButton><Person2OutlinedIcon/></IconButton>
                <IconButton></IconButton>
            </Box>
            <IconButton sx={{}}></IconButton>
        </Box>
    )
}