import {FaRegCalendarAlt} from "react-icons/fa";


export function AddTaskPop() {

    return (

        <>
            <div className="w-full h-screen bg-black/70 flex justify-center items-center absolute z-[200]">

                <div className="flex justify-center items-center w-200 ">
                    <div className=" justify-center items-center text-center flex-col gap-40">

                        <div className="flex items-center flex gap-2 mb-4 gap-x-4">
                            <label className="text-[#000] text-[11px] font-[600] mb-[4px]">Task</label>
                            <FaRegCalendarAlt className="text-gray-500"/>
                            <input
                                type="date"
                                className="w-full border p-2 rounded-md"

                            />
                        </div>
                        <div className="w-full mb-[25px] text-left flex gap-x-10">
                            <label className="text-[#000] text-[11px] font-[600] mb-[4px] pt-4">Task</label>
                            <input
                                className="w-full border-[2px] border-[#E7E7E9] h-[50px] p-[10px] font-[18px] font-[600] rounded-[9x]"
                                type="text"/>
                        </div>
                        <div className="w-full mb-[25px] text-left flex gap-x-10">
                            <label className="text-[#000] text-[11px] font-[600] mb-[4px] pt-10">Time</label>
                            <div className="w-1/2">
                                <label className="text-[#000] text-[11px] font-[600] mb-[4px] pt-4">start</label>

                                <input
                                    className="w-full border-[2px] border-[#E7E7E9] h-[50px] p-[10px] font-[18px] font-[600] rounded-[9px]"
                                    type="text"/>
                            </div>
                            <div className="w-1/2">
                                <label className="text-[#000] text-[11px] font-[600] mb-[4px] pt-4">end</label>

                                <input
                                    className="w-full border-[2px] border-[#E7E7E9] h-[50px] p-[10px] font-[18px] font-[600] rounded-[9px]"
                                    type="text"/>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
}