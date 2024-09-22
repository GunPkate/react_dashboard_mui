import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar"
import { Box, IconButton, Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
// import TimeLineOutlinedIcon from "@mui/icons-material/TimeLineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MaplinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem active={selected === title}>
            <Typography></Typography>
            <Link/>
        </MenuItem>
    )
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [isCollapse, setIsCollapse] = useState();
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box sx={{
            "& .pro-sider-inner": { background: `${colors.primary[400]} !importane` },
            "& .pro-icon-wrapper": { backgroundColor: "transparent !importane" },
            "& .pro-inner-item": { padding: "5px 35px 5px 20px !important" },
            "& .pro-inner-item:hover ": { color: "#868dfb !important" },
            "& .pro-menu-item:active ": { color: "#6870fa !important" },
        }}>
            <ProSidebar>
                <Menu>
                    <MenuItem>
                        {!isCollapse && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>ADMINS</Typography>
                                <IconButton onClick={() => { setIsCollapse(isCollapse) }}> <MenuOutlinedIcon /> </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapse && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                    src="https://picsum.photos/200"
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    User
                                </Typography>
                                <Typography variant="h5" color={colors.grey[100]}>VP ADMIN</Typography>
                            </Box>
                        </Box>
                    )}
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar;