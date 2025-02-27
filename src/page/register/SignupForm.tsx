import { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/user new.png";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/Store.ts";
import {registerUser} from "../../slice/user-slice.ts";

export function SignupForm() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",

    });

    const dispatch = useDispatch <AppDispatch>();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("User Data:", user);
        dispatch(registerUser(user));
    };

    return (
        <div className="w-full h-screen flex justify-center items-center text-center">
            <div className="w-auto h-auto flex justify-center items-center gap-10">
                <div className="flex justify-center items-center">
                    <img src={loginImg} alt="login form img" className="mb-10 w-[500px]" />
                </div>
                <form onSubmit={handleSubmit} className="w-[450px] flex flex-col items-center">
                    <h6 className="font-[600] text-[28px] text-black">Sign in to Task Manager</h6>
                    <p className="font-[400] text-[16px] text-black mb-[10px]">Login to system continue</p>

                    <div className="w-full mb-[25px] text-left">
                        <label className="text-black text-[11px] font-[600] mb-[4px]">Username</label>
                        <input
                            className="w-full border-[2px] border-[#E7E7E9] h-[50px] p-[10px] font-[18px] font-[600] rounded-[9px]"
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="w-full mb-[25px] text-left">
                        <label className="text-black text-[11px] font-[600] mb-[4px]">e-mail</label>
                        <input
                            className="w-full border-[2px] border-[#E7E7E9] h-[50px] p-[10px] font-[18px] font-[600] rounded-[9px]"
                            type="text"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="w-full mb-[25px] text-left">
                        <label className="text-black text-[11px] font-[600] mb-[4px]">Password</label>
                        <input
                            className="w-full border-[2px] border-[#E7E7E9] h-[50px] p-[10px] font-[18px] font-[600] rounded-[9px]"
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>

                    {/*<div className="w-full mb-[25px] text-left">*/}
                    {/*    <label className="text-black text-[11px] font-[600] mb-[4px]">Re-enter password</label>*/}
                    {/*    <input*/}
                    {/*        className="w-full border-[2px] border-[#E7E7E9] h-[50px] p-[10px] font-[18px] font-[600] rounded-[9px]"*/}
                    {/*        type="password"*/}
                    {/*        name="confirmPassword"*/}
                    {/*        value={user.confirmPassword}*/}
                    {/*        onChange={handleChange}*/}
                    {/*    />*/}
                    {/*</div>*/}

                    <button
                        type="submit"
                        className="w-full flex justify-center border-[1px] py-[17px] rounded-[25px] font-[600] text-[12px] text-white mb-[14px] bg-black"
                    >
                        Sign up
                    </button>

                    <div className="signUp flex items-center gap-1 mb-[33px] mt-[10px]">
                        <span className="text-[12px] font-[400] text-black">Don’t have an account?</span>
                        <Link to="/" className="text-[12px] font-[400] text-black underline decoration-1">
                            Sign In
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
