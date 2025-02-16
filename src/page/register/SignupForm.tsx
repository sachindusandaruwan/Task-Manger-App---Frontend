import loginImg from "../../assets/student-designer-greeting.png";
import {Link} from "react-router-dom";

export function SignupForm() {
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center text-center">
                <div className="w-auto h-auto flex justify-center items-center ">
                    <div className="flex justify-center items-center">
                        <img src={loginImg} alt="login form img" className="mb-10 w-[500px]"/>
                    </div>
                    <form action="" className="w-[450px] flex flex-col items-center">
                        <h6 className="font-[600] text-[28px] text-[000000]">Sign in to Task Manager</h6>
                        <p className="font-[400] text-[16px] text-black mb-[10px]">Login to system continue</p>

                        <div className="w-full mb-[25px] text-left">
                            <label className="text-[#000] text-[11px] font-[600] mb-[4px]">Username</label>
                            <input
                                className="w-full border-[2px] border-[#E7E7E9] h-[50px] p-[10px] font-[18px] font-[600] rounded-[9x]"
                                type="text"/>
                        </div>
                        <div className="w-full mb-[25px] text-left">
                            <label className="text-[#000] text-[11px] font-[600] mb-[4px]">Password</label>
                            <input
                                className="w-full border-[2px] border-[#E7E7E9] h-[50px] p-[10px] font-[18px] font-[600] rounded-[9x]"
                                type="text"/>
                        </div>
                        <div className="w-full mb-[25px] text-left">
                            <label className="text-[#000] text-[11px] font-[600] mb-[4px]">Re-enter password</label>
                            <input
                                className="w-full border-[2px] border-[#E7E7E9] h-[50px] p-[10px] font-[18px] font-[600] rounded-[9x]"
                                type="text"/>
                        </div>
                        <button type="submit"
                                className="w-full flex justify-center border-[1px] py-[17px] rounded-[25px] font-[600] text-[12px] text-[#FFF] mb-[14px] !bg-black">Sign
                            up
                        </button>
                        <div className="signUp flex items-center gap-1 mb-[33px] mt-[10px]">
                            <span className="text-[12px] font-[400] text-[#000]">Don you have an account ?</span>
                            <Link to="/" className="text-[12px] font-[400] text-[#000] underline decoration-1">Sign
                                In</Link>
                        </div>


                    </form>


                </div>
            </div>
        </>
    );
}