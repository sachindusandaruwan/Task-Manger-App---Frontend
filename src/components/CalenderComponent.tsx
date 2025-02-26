import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Task } from "../model/Task.ts";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store.ts";
import { useState } from "react";

import {UpdateTaskPop} from "../page/pop/ManageTaskPopup.tsx";
import {useNavigate} from "react-router-dom";
 // Import the popup component

// Set up the localizer using moment
const localizer = momentLocalizer(moment);




interface CalendarComponentProps {
    handlePopup: () => void;
}

const CalendarComponent = ({ handlePopup }: CalendarComponentProps) => {
    // Get tasks from the Redux store
    const tasks: Task[] = useSelector((state: RootState) => state.tasks);

    // Store the selected task and open update popup state
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const navigate=useNavigate();

    // Map the tasks to the format required by react-big-calendar
    const events = tasks.map((task) => ({
        title: task.title,
        start: new Date(task.startDateTime), // Ensure this is a Date object
        end: new Date(task.endDateTime),     // Ensure this is a Date object
        status: task.status,
        place: task.place,
        taskObject: task // Store the full task object for reference
    }));

    // Function to handle task click and open update popup
    const handleEventClick = (event: any) => {
        setSelectedTask(event.taskObject);
    };


    const handleLogout=()=>{
        navigate("/");
    }

    return (
        <div style={{height: "500px", margin: "20px", paddingLeft: "50px", paddingRight: "50px"}}>
            <h1 style={{fontSize: 40, paddingBottom: 10, paddingTop: 10}}>Tasks Management</h1>
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
                style={{height: 500}}
                onSelectEvent={handleEventClick} // Event click handler
            />

            {/* Show update popup if a task is selected */}
            {selectedTask && (
                <UpdateTaskPop closePopup={() => setSelectedTask(null)} task={selectedTask}/>
            )}
            <button onClick={handleLogout}
                    className="w-30 flex mt-10 float-end justify-center border-[1px] py-[17px] rounded-[25px] font-[600] text-[10px] text-[#FFF] mb-[14px] !bg-black">Logout
            </button>
        </div>

    );
};

export default CalendarComponent;
