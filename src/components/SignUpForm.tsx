import React from 'react';

interface SignUpFormProps {
    onRegister: (name: string, email: string, phone: string, password: string) => void;
    setShowLogin: (show: boolean) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onRegister, setShowLogin }) => {
    return (
        <div className="w-full h-full flex-col items-center gap-7 flex">
            <h2 className="font-[GilroyBold] text-[32px]">SignUp</h2>
            <div className="w-full flex flex-col gap-5">
                <input type="text" placeholder="Enter your name" id="SignUpName" className="border border-[#0ca941] rounded-[10px] w-full h-[60px] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#333] pl-[15px] outline-none" />
                <input type="email" placeholder="Enter your email" id="SignUpEmail" className="border border-[#0ca941] rounded-[10px] w-full h-[60px] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#333] pl-[15px] outline-none" />
                <input type="phone" placeholder="Enter your phone" id="SignUpPhone" className="border border-[#0ca941] rounded-[10px] w-full h-[60px] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#333] pl-[15px] outline-none" />
                <input type="password" placeholder="Enter your password" id="SignUpPassword" className="border border-[#0ca941] rounded-[10px] w-full h-[60px] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#333] pl-[15px] outline-none" />
            </div>
            <div className="w-full flex flex-col items-center gap-8">
                <button
                    className="cursor-pointer rounded-[10px] w-[223px] h-[55px] bg-[#0ca941] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#fff]"
                    onClick={() => onRegister(
                        (document.getElementById('SignUpName') as HTMLInputElement)?.value,
                        (document.getElementById('SignUpEmail') as HTMLInputElement)?.value,
                        (document.getElementById('SignUpPhone') as HTMLInputElement)?.value,
                        (document.getElementById('SignUpPassword') as HTMLInputElement)?.value
                    )}
                >SignUp</button>
                <p>Already have an account? <button className="cursor-pointer text-[#0ca941]" onClick={() => setShowLogin(true)}>LogIn</button>.</p>
            </div>
        </div>
    );
};

export default SignUpForm; 