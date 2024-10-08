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
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter new title for event")
        const calendarApi = selected.view.calendar
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

    const handleEventClick = (selected) => {
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
                    {currentEvents.map((event) => (
                        <ListItem
                            key={event.id}
                            sx={{ backgroundColor: colors.greenAccent[700], margin: "10px 0", borderRadius: "5px" }}
                        >
                            <ListItemText
                                primary={event.title}
                                secondary={
                                    <Typography>
                                        {formatDate(event.start, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric"
                                        })}
                                    </Typography>
                                }
                            >

                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Box>

            <Box flex="1 1 100%" ml="15px">
                <FullCalendar
                    height="70vh"
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                    headerToolbar={{
                        left: "prev next today",
                        center: "title",
                        right: "dayGridMonth timeGridWeek timeGridDay listMonth",
                    }}
                    initialView = "dayGridMonth"
                    editable = {true} 
                    selectable = {true}
                    selectMirror = {true}
                    dayMaxEvents = {true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events)=> setCurrentEvents(events)}
                    initialEvents={[
                        {id: "123", title:"All Day Event", date:"2024-09-14"},
                        {id: "123", title:"All Day Event", date:"2024-10-02"},
                    ]}
                />
            </Box>
        </Box>
    </Box >)
}