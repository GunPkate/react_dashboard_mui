import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import { Box, Typography, List, ListItem, ListItemText, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

export default function Calendar() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [event, setEvent] = useState([]);

    const handleClickDate = (selected) => {
        const title = prompt("Please enter new title for event")
        const calendarApi = selected.view.Calendar
        calendarApi.unselect()


        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr} - ${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            })
        }
    }

    const addEventClick = (selected) => {
        if (window.confirm(`Are you sure to delete event ${selected.event.title}`)) {
            selected.event.remove()
        }
    }

    return (<Box m="20px">
        <Header title="Calendar" Subtitle="Calendar" />

        <Box display="flex" justifyContent="space-between">

            <Box flex="1 20%" backgroundColor={colors.primary[400]}  p="15px" borderRadius="4px" >
                <Typography variant="5h">Event</Typography>
                <List>
                </List>
            </Box>
    </Box> 
    </Box >)
}