import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import styles

// Set up the localizer using moment
const localizer = momentLocalizer(moment);

const CalendarComponent: React.FC = () => {
    return (
        <div style={{ height: "500px", margin: "20px" }}>
            <h2>Simple Calendar</h2>
            <Calendar
                localizer={localizer}
                events={[]} // No events
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
};

export default CalendarComponent;