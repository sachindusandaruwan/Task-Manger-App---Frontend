import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import {useState} from "react";
import {removeTask, updateTask} from "../../slice/TaskSlice.ts";
import {Task} from "../../model/Task.ts";


interface UpdateTaskPopProps {
    closePopup: () => void;
    task: Task; // Task is required for updating or deleting
}

export function UpdateTaskPop({ closePopup, task }: UpdateTaskPopProps) {
    const dispatch = useDispatch();

    // State variables for task fields
    const [title, setTitle] = useState(task.title);
    const [startDateTime, setStartDateTime] = useState(task.startDateTime);
    const [endDateTime, setEndDateTime] = useState(task.endDateTime);
    const [place, setPlace] = useState(task.place);
    const [status, setStatus] = useState(task.status);

    function handleUpdateTask(e: any) {
        e.preventDefault();
        const updatedTask = { ...task, title, startDateTime, endDateTime, place, status };
        dispatch(updateTask(updatedTask));
        alert("Task Updated Successfully");
        closePopup();
    }

    function handleDeleteTask() {
        if (window.confirm("Are you sure you want to delete this task?")) {
            dispatch(removeTask(task.taskId));
            alert("Task Deleted Successfully");
            closePopup();
        }
    }

    return (
        <motion.div
            className="fixed inset-0 z-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Background Overlay */}
            <motion.div
                className="absolute inset-0 bg-gray-800 opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            ></motion.div>

            {/* Modal Content */}
            <motion.div
                className="bg-white rounded-lg p-8 w-full sm:w-[42vw] drop-shadow-2xl flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
            >
                <h1 className="text-[32px] font-[600] text-center">Update Task</h1>

                <div className="mt-[30px] flex flex-col gap-[30px] w-full items-center">
                    {/* Task Title */}
                    <input type="text" className="border rounded p-2 w-full" value={title} onChange={(e) => setTitle(e.target.value)} />

                    {/* Start & End Date/Time */}
                    <input type="datetime-local" className="border rounded p-2 w-full" value={startDateTime} onChange={(e) => setStartDateTime(e.target.value)} />
                    <input type="datetime-local" className="border rounded p-2 w-full" value={endDateTime} onChange={(e) => setEndDateTime(e.target.value)} />

                    {/* Place & Status */}
                    <input type="text" className="border rounded p-2 w-full" value={place} onChange={(e) => setPlace(e.target.value)} />
                    <input type="text" className="border rounded p-2 w-full" value={status} onChange={(e) => setStatus(e.target.value)} />

                    {/* Buttons */}
                    <div className="flex justify-between w-full">
                        <button onClick={closePopup} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
                        <button onClick={handleUpdateTask} className="bg-blue-500 text-white p-2 rounded">Update</button>
                        <button onClick={handleDeleteTask} className="bg-red-500 text-white p-2 rounded">Delete</button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
