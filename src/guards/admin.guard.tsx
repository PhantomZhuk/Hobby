import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AdminPage from "../Page/Admin";

const AdminGuard: React.FC = () => {
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAdmin = async () => {
            try {
                const res = await axios.get("http://localhost:5000/user/userInfo", { withCredentials: true });
                setIsAdmin(res.data?.isAdmin ?? false);
            } catch (error) {
                setIsAdmin(false);
            }
        };

        checkAdmin();
    }, []);

    if (isAdmin === null) return <div className="w-full h-screen flex justify-center items-center gap-5 text-4xl">Loading...</div>;

    return isAdmin ? <AdminPage /> : <Navigate to="/" replace />;
};

export default AdminGuard;
