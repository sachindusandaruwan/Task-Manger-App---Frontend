
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import styles

// Set up the localizer using moment
const localizer = momentLocalizer(moment);
interface CalendarComponentProps {
    handlePopup: () => void;
}
const CalendarComponent = ({handlePopup}:CalendarComponentProps) => {
    return (
        <div style={{height: "500px", margin: "20px", paddingLeft: "50px", paddingRight: "50px"}}>
            <h1>Tasks Management</h1>
            <button type="submit"
                    onClick={handlePopup}
                    className="w-40 h-10 flex justify-center border-[1px] py-[10px] rounded-[25px] font-[600] text-[12px] text-[#FFF] mb-[14px] !bg-black">Add
                task
            </button>
            <Calendar
                localizer={localizer}
                events={[]} // No events
                startAccessor="start"
                endAccessor="end"
                style={{height: 500}}
            />
        </div>
    );
};

export default CalendarComponent;