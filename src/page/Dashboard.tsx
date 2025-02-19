import CalendarComponent from "../components/CalenderComponent.tsx";
import {AddTaskPop} from "./pop/AddTaskPop.tsx";
import {useState} from "react";

export function Dashboard() {
    const [showPopup, setShowPopup] = useState(false);
    function togglePopup() {
        setShowPopup(!showPopup);
    }
    return (
       <>
       <div className="mg-4">
           {showPopup && <AddTaskPop></AddTaskPop>}
           <CalendarComponent handlePopup={togglePopup}></CalendarComponent>

       </div>
       </>
    );
}