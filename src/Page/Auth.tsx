import { useState } from "react";
import { duration } from "./Home";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { Login, Register } from "../services/authService";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Auth() {
    const [showLogin, setShowLogin] = useState(true);

    const queryClient = new QueryClient();

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

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div data-aos="zoom-in-down" data-aos-duration={duration} className="w-[600px] h-[600px] absolute right-0 top-0 bg-[#53C351] blur-[150px] rounded-full z-[-1]"></div>
            <div data-aos="zoom-in-up" data-aos-duration={duration} className="w-[600px] h-[600px] absolute bottom-0 left-[-50px] bg-[#FFE978] blur-[150px] rounded-full z-[-1]"></div>
            <div data-aos="fade-up" data-aos-duration={duration} className="w-[500px] min-h-[500px] flex items-center justify-center py-20 px-10 bg-[#f8f8f8]/[0.5] backdrop-blur-lg shadow-lg rounded-[19px]">
                {showLogin ? (
                    <LoginForm onLogin={(email, password) => LoginMutation.mutate({ email, password })} setShowLogin={setShowLogin} />
                ) : (
                    <SignUpForm onRegister={(name, email, phone, password) => RegisterMutation.mutate({ name, email, phone, password })} setShowLogin={setShowLogin} />
                )}
            </div>
        </div>
    );
}

export default Auth;