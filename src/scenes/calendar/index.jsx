import fullcalendar, { formatDate } from "@fullcalendar/react";
import { useState } from "react";
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listGridPlugin from '@fullcalendar/list'

// import interactionPlugin from '@fullcalendar/interaction'
import { Box, Typography, List, ListItem, ListItemText, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

export default function Calendar() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [event, setEvent] = useState([]);

    
    return (<Box>
        <Header title="Calendar" Subtitle="Calendar"/>
    </Box>)
}