import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const AdminGuard: React.FC = () => {
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAdmin = async () => {
            try {
                const res = await axios.get('http://localhost:5000/user/userInfo', { withCredentials: true });
                if (res.status === 200) {
                    setIsAdmin(res.data.isAdmin);
                } else {
                    setIsAdmin(false);
                }
            } catch (error) {
                setIsAdmin(false);
            }
        };

        checkAdmin();
    }, []);

    if (isAdmin === null) {
        return <div>Loading...</div>;
    }

    if (isAdmin) {
        return <Navigate to="/admin" />;
    }

    return <Navigate to="/" />;
};

export default AdminGuard;
