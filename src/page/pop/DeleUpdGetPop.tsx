import {motion} from "framer-motion";

export function DeleUpdGetPop({closePopup}: { closePopup: () => void }) {
    return (
        <>
            <motion.div
                className="fixed inset-0 z-50 flex justify-center items-center"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.3}}
            >
                {/* Background Overlay */}
                <motion.div
                    className="absolute inset-0 bg-gray-800 opacity-50"
                    initial={{opacity: 0}}
                    animate={{opacity: 0.5}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.3}}
                ></motion.div>

                {/* Modal Content */}
                <motion.div
                    className="bg-white rounded-lg p-8 w-full sm:w-[42vw] drop-shadow-2xl flex flex-col items-center"
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.9}}
                    transition={{duration: 0.4}}
                >
                    <h1 className="text-[32px] font-[600] text-center">Add Task</h1>
                    <div className="mt-[43px] flex flex-col gap-[40px] w-full items-center">
                        <div className="flex flex-col w-full">
                            <label className="text-[16px] font-[500]">Title</label>
                            <input type="text"
                                   className="rounded-[12px] border-[1.5px] border-[#E7E7E90] text-[18px] font-[500] p-3 w-full mt-[5px]"/>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-6 w-full">
                                {/* Start Date & Time */}
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-900">Start Date & Time</label>
                                    <div className="mt-2">
                                        <input type="datetime-local" name="startDateTime" required
                                               className="rounded-[12px] border-[1.5px] border-[#E7E7E90] text-[18px] font-[500] p-3 w-full mt-[5px]"/>
                                    </div>
                                </div>

                                {/* End Date & Time */}
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-900">End Date & Time</label>
                                    <div className="mt-2">
                                        <input type="datetime-local" name="endDateTime" required
                                               className="rounded-[12px] border-[1.5px] border-[#E7E7E90] text-[18px] font-[500] p-3 w-full mt-[5px]"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-[16px] font-[500]">Place</label>
                            <input type="text"
                                   className="rounded-[12px] border-[1.5px] border-[#E7E7E90] text-[18px] font-[500] p-3 w-full mt-[5px]"/>
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="text-[16px] font-[500]">Status</label>
                            <input type="text"
                                   className="rounded-[12px] border-[1.5px] border-[#E7E7E90] text-[18px] font-[500] p-3 w-full mt-[5px]"/>
                        </div>
                    </div>

                    <div className="flex justify-between mt-[43px] w-full">
                        <button onClick={closePopup}
                                className="flex items-center gap-3 bg-black text-[#fff] p-3 px-7 rounded-[12px]">
                            <span>close</span>
                        </button>
                        <button onClick={closePopup}
                                className="flex items-center gap-3 bg-black text-[#fff] p-3 px-7 rounded-[12px]">
                            <span>close</span>
                        </button>
                        <button className="flex items-center gap-3 bg-black text-[#fff] p-3 px-7 rounded-[12px]">
                            <span>Add</span>
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}