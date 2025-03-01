import { Routes, Route } from "react-router-dom";
import HomePage from "../Page/Home/Home";
import AuthPage from "../Page/Auth/Auth";
import NotFoundPage from "../Page/NotFound/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;
