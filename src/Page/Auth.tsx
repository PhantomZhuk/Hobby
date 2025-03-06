import { useState } from "react";
import { duration } from "./Home";
import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";

function Auth() {
    const [showLogin, setShowLogin] = useState(true);

    const queryClient = new QueryClient();

    function Login({ email, password }: { email: string, password: string }) {
        const response = axios.post('http://localhost:5000/user/login', { email, password }, { withCredentials: true });
        clearInput();
        response.then(res => {
            console.log(res);
            if (res.status === 200) {
                window.location.href = '/home';
            }
        });
        return response;
    }

    function Register({ name, email, phone, password }: { name: string, email: string, phone: string, password: string }) {
        const response = axios.post('http://localhost:5000/user/create', { name, email, phone, password }, { withCredentials: true });
        clearInput();
        response.then(res => {
            console.log(res);
            if (res.status === 200) {
                window.location.href = '/home';
            }
        });
        return response;
    }

    const RegisterMutation = useMutation({
        mutationFn: Register,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['user'],
                exact: true,
            });
        },
    });

    const LoginMutation = useMutation({
        mutationFn: Login,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['user'],
                exact: true,
            });
        },
    });

    function clearInput() {
        const nameInput = document.getElementById('SignUpName') as HTMLInputElement;
        const emailSignInput = document.getElementById('SignUpEmail') as HTMLInputElement;
        const emailLoginInput = document.getElementById('LoginEmail') as HTMLInputElement;
        const phoneInput = document.getElementById('SignUpPhone') as HTMLInputElement;
        const passwordSignInput = document.getElementById('SignUpPassword') as HTMLInputElement;
        const passwordLoginInput = document.getElementById('LoginPassword') as HTMLInputElement;

        nameInput.value = '';
        emailSignInput.value = '';
        emailLoginInput.value = '';
        phoneInput.value = '';
        passwordSignInput.value = '';
        passwordLoginInput.value = '';
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div data-aos="zoom-in-down" data-aos-duration={duration} className="w-[600px] h-[600px] absolute right-0 top-0 bg-[#53C351] blur-[150px] rounded-full z-[-1]"></div>
            <div data-aos="zoom-in-up" data-aos-duration={duration} className="w-[600px] h-[600px] absolute bottom-0 left-[-50px] bg-[#FFE978] blur-[150px] rounded-full z-[-1]"></div>
            <div data-aos="fade-up" data-aos-duration={duration} className="w-[500px] min-h-[500px] flex items-center justify-center py-20 px-10 bg-[#f8f8f8]/[0.5] backdrop-blur-lg shadow-lg rounded-[19px]">
                <div className={`w-full h-full flex-col items-center gap-7 ${showLogin ? "flex" : "hidden"}`}>
                    <h2 className="font-[GilroyBold] text-[32px]">LogIn</h2>
                    <div className="w-full flex flex-col gap-5">
                        <input type="email" placeholder="Enter your email" id="LoginEmail" className="border border-[#0ca941] rounded-[10px] w-full h-[60px] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#333] pl-[15px] outline-none" />
                        <input type="password" placeholder="Enter your password" id="LoginPassword" className="border border-[#0ca941] rounded-[10px] w-full h-[60px] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#333] pl-[15px] outline-none" />
                    </div>
                    <div className="w-full flex flex-col items-center gap-8">
                        <button
                            className="cursor-pointer rounded-[10px] w-[223px] h-[55px] bg-[#0ca941] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#fff]"
                            onClick={() => LoginMutation.mutate({
                                email: (document.getElementById('LoginEmail') as HTMLInputElement)?.value,
                                password: (document.getElementById('LoginPassword') as HTMLInputElement)?.value
                            })}
                        >LogIn</button>
                        <p>Don't have an account? <button className="cursor-pointer text-[#0ca941]" onClick={() => setShowLogin(false)}>SignUp</button>.</p>
                    </div>
                </div>
                <div className={`w-full h-full flex-col items-center gap-7 ${showLogin ? "hidden" : "flex"}`}>
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
                            onClick={() => RegisterMutation.mutate({
                                name: (document.getElementById('SignUpName') as HTMLInputElement)?.value,
                                email: (document.getElementById('SignUpEmail') as HTMLInputElement)?.value,
                                phone: (document.getElementById('SignUpPhone') as HTMLInputElement)?.value,
                                password: (document.getElementById('SignUpPassword') as HTMLInputElement)?.value
                            })}
                        >SignUp</button>
                        <p>Already have an account? <button className="cursor-pointer text-[#0ca941]" onClick={() => setShowLogin(true)}>LogIn</button>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;