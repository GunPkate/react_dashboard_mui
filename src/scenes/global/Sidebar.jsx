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
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MaplinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Link to={to}>
            <MenuItem active={selected === title}
                style={{ color: colors.grey[100] }}
                onClick={() => { setSelected(title) }}
                icon={icon}>
                <Typography>{title}</Typography>
            </MenuItem>
        </Link>
    )
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [isCollapse, setIsCollapse] = useState();
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box sx={{
            "& .pro-sidebar-inner": { background: `${colors.primary[400]} !important` },
            "& .pro-icon-wrapper": { backgroundColor: "transparent !important" },
            "& .pro-inner-item": { padding: "5px 35px 5px 20px !important" },
            "& .pro-inner-item:hover ": { color: "#868dfb !important" },
            "& .pro-menu-item.active ": { color: "#6870fa !important" },
        }}>
            <ProSidebar collapsed={isCollapse}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => { setIsCollapse(!isCollapse) }}
                        icon={isCollapse ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100]
                        }}
                    >
                    </MenuItem>
                </Menu>
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
                                <IconButton onClick={() => { setIsCollapse(!isCollapse) }}> <MenuOutlinedIcon /> </IconButton>
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
                                <Typography variant="h5" color={colors.greenAccent[100]}>VP ADMIN</Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapse ? undefined : "10%"}>
                        <Item
                            title={ !isCollapse ? "Dashboard" : ""}
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Data
                        </Typography>
                        <Item
                            title={ !isCollapse ? "Manage Team" : ""}
                            to="/team"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={ !isCollapse ? "Contact Information" : ""}
                            to="/contacts"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={ !isCollapse ? "Invoices Balances" : ""}
                            to="/invoices"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Pages
                        </Typography>
                        <Item
                            title={ !isCollapse ? "Profile Form" : ""}
                            to="/form"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={ !isCollapse ? "Calendar" : ""}
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={ !isCollapse ? "FAQ Page" : ""}
                            to="/faq"
                            icon={<HelpOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Chart
                        </Typography>
                        <Item
                            title={ !isCollapse ? "Bar Chart" : ""}
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={ !isCollapse ? "Pie Chart" : ""}
                            to="/pie"
                            icon={<PieChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title={ !isCollapse ? "Line Chart" : ""}
                            to="/line"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar;