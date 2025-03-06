import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Page/Home";
import AuthPage from "../Page/Auth";
import NotFoundPage from "../Page/NotFound";
import UserPage from "../Page/UserProfile";
import AuthGuard from "../guards/auth.guard";
import AdminGuard from "../guards/admin.guard";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<AuthGuard />}>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/profile" element={<UserPage />} />
                    <Route path="/admin" element={<Navigate to="/admin/users" />} />
                    <Route path="/admin/:id" element={<AdminGuard />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;