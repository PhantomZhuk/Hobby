import React from 'react';

interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
    setShowLogin: (show: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, setShowLogin }) => {
    return (
        <div className="w-full h-full flex-col items-center gap-7 flex">
            <h2 className="font-[GilroyBold] text-[32px]">LogIn</h2>
            <div className="w-full flex flex-col gap-5">
                <input type="email" placeholder="Enter your email" id="LoginEmail" className="border border-[#0ca941] rounded-[10px] w-full h-[60px] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#333] pl-[15px] outline-none" />
                <input type="password" placeholder="Enter your password" id="LoginPassword" className="border border-[#0ca941] rounded-[10px] w-full h-[60px] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#333] pl-[15px] outline-none" />
            </div>
            <div className="w-full flex flex-col items-center gap-8">
                <button
                    className="cursor-pointer rounded-[10px] w-[223px] h-[55px] bg-[#0ca941] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#fff]"
                    onClick={() => onLogin(
                        (document.getElementById('LoginEmail') as HTMLInputElement)?.value,
                        (document.getElementById('LoginPassword') as HTMLInputElement)?.value
                    )}
                >LogIn</button>
                <p>Don't have an account? <button className="cursor-pointer text-[#0ca941]" onClick={() => setShowLogin(false)}>SignUp</button>.</p>
            </div>
        </div>
    );
};

export default LoginForm; 