import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function AuthButton() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5000/user/verifyToken", { withCredentials: true })
            .then(res => {
                if (res.status === 200) {
                    setIsAuth(true);
                } else {
                    axios.get("http://localhost:5000/user/refresh", { withCredentials: true })
                        .then(res => {
                            if (res.status === 200) {
                                setIsAuth(true);
                            } else {
                                axios.get("http://localhost:5000/user/logout", { withCredentials: true });
                                setIsAuth(false);
                            }
                        })
                        .catch(() => {
                            setIsAuth(false);
                        })
                }
            })
            .catch(() => {
                setIsAuth(false);
            })
    }, [])

    if (isAuth) {
        return (
            <Link to="/profile" >
                <button
                    className="text-white text-[18px] font-[600] w-[41px] h-[41px] rounded-[6px] bg-[#0ca941] cursor-pointer hover:bg-[#0ecf4f]"
                ><FontAwesomeIcon icon={faUser} />
                </button>
            </Link>
        )
    } else {
        return (
            <Link to="/auth" >
                <button
                    className="text-white text-[18px] font-[600] w-[110px] h-[41px] rounded-[6px] bg-[#0ca941] cursor-pointer hover:bg-[#0ecf4f]"
                >Login
                </button>
            </Link>
        );
    }
}

export default AuthButton;