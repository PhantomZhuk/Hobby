import { Link } from "react-router-dom";

function AuthButton() {

    return (
        <div>
            <Link to="/auth" >
                <button
                    className="text-white text-[18px] font-[600] w-[110px] h-[41px] rounded-[6px] bg-[#0ca941] cursor-pointer hover:bg-[#0ecf4f]"
                >Login
                </button>
            </Link>
        </div>
    );
}

export default AuthButton;