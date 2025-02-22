import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Task } from "../model/Task.ts";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store.ts";

// Set up the localizer using moment
const localizer = momentLocalizer(moment);

interface CalendarComponentProps {
    handlePopup: () => void;
}

const CalendarComponent = ({ handlePopup }: CalendarComponentProps) => {
    // Get tasks from the Redux store
    const tasks: Task[] = useSelector((state: RootState) => state.tasks);

    // Map the tasks to the format required by react-big-calendar
    const events = tasks.map((task) => ({
        title: task.title,
        start: new Date(task.startDateTime),  // Ensure this is a Date object
        end: new Date(task.endDateTime),      // Ensure this is a Date object
        status: task.status,
        place: task.place
    }));

    console.log(events);

    return (
        <div style={{ height: "500px", margin: "20px", paddingLeft: "50px", paddingRight: "50px" }}>
            <h1 style={{ fontSize: 40, paddingBottom: 10, paddingTop: 10 }}>Tasks Management</h1>
            <button
                type="submit"
                onClick={handlePopup}
                className="w-40 h-10 flex justify-center border-[1px] py-[10px] rounded-[25px] font-[600] text-[12px] text-[#FFF] mb-[14px] !bg-black"
            >
                Add
            </button>
            <Calendar
                localizer={localizer}
                events={events}  // Pass the formatted events here
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
};

export default CalendarComponent;
