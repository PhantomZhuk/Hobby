import { useState } from "react";
import { duration } from "../Home/Home";

function Auth() {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div data-aos="zoom-in-down" data-aos-duration={duration} className="w-[600px] h-[600px] absolute right-0 top-0 bg-[#53C351] blur-[150px] rounded-full z-[-1]"></div>
            <div data-aos="zoom-in-up" data-aos-duration={duration} className="w-[600px] h-[600px] absolute bottom-0 left-[-50px] bg-[#FFE978] blur-[150px] rounded-full z-[-1]"></div>
            <div data-aos="fade-up" data-aos-duration={duration} className="w-[500px] h-[500px] flex items-center justify-center py-20 px-10 bg-[#f8f8f8]/[0.5] backdrop-blur-lg shadow-lg rounded-[19px]">
                <div className={`w-full h-full flex-col items-center gap-7 ${showLogin ? "flex" : "hidden"}`}>
                    <h2 className="font-[GilroyBold] text-[32px]">LogIn</h2>
                    <div className="w-full flex flex-col gap-5">
                        <input type="email" placeholder="Enter your email" id="LoginEmail" className="border border-[#0ca941] rounded-[10px] w-full h-[60px] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#333] pl-[15px] outline-none" />
                        <input type="password" placeholder="Enter your password" id="LoginPassword" className="border border-[#0ca941] rounded-[10px] w-full h-[60px] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#333] pl-[15px] outline-none" />
                    </div>
                    <div className="w-full flex flex-col items-center gap-8">
                        <button
                            className="cursor-pointer rounded-[10px] w-[223px] h-[55px] bg-[#0ca941] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#fff]"
                        >LogIn</button>
                        <p>Don't have an account? <button className="cursor-pointer text-[#0ca941]" onClick={() => setShowLogin(false)}>SignUp</button>.</p>
                    </div>
                </div>
                <div className={`w-full h-full flex-col items-center gap-7 ${showLogin ? "hidden" : "flex"}`}>
                    <h2 className="font-[GilroyBold] text-[32px]">SignUp</h2>
                    <div className="w-full flex flex-col gap-5">
                        <input type="email" placeholder="Enter your email" id="SignUpEmail" className="border border-[#0ca941] rounded-[10px] w-full h-[60px] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#333] pl-[15px] outline-none" />
                        <input type="password" placeholder="Enter your password" id="SignUpPassword" className="border border-[#0ca941] rounded-[10px] w-full h-[60px] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#333] pl-[15px] outline-none" />
                    </div>
                    <div className="w-full flex flex-col items-center gap-8">
                        <button
                            className="cursor-pointer rounded-[10px] w-[223px] h-[55px] bg-[#0ca941] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#fff]"
                        >SignUp</button>
                        <p>Already have an account? <button className="cursor-pointer text-[#0ca941]" onClick={() => setShowLogin(true)}>LogIn</button>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;