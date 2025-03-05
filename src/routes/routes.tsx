import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Page/Home/Home";
import AuthPage from "../Page/Auth/Auth";
import NotFoundPage from "../Page/NotFound/NotFound";
import UserPage from "../Page/UserProfile/UserProfile";
import AuthGuard from "../guards/auth.guard";
import AdminGuard from "../guards/admin.guard";
import AdminPage from "../Page/Admin/Admin";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<AuthGuard />}>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/profile" element={<UserPage />} />
            </Route>
            <Route element={<AdminGuard/>}>
                <Route path="/admin" element={<AdminPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;
