import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faSeedling, faShoppingCart, faSitemap } from "@fortawesome/free-solid-svg-icons";
import Logo from "../components/Logo";
import Users from "../components/AdminUsers";
import Flowers from "../components/AdminFlowers";
import Orders from "../components/AdminOrders";
import Subscribes from "../components/AdminSubscribes";
import SiteInfo from "../components/AdminSiteInfo";
import { Link, useParams } from "react-router-dom";

function Admin() {
    const { id } = useParams();
    const nav = [
        {
            name: "Users",
            icon: faUsers,
            url: "users", 
        },
        {
            name: "Flowers",
            icon: faSeedling,
            url: "flowers",
        },
        {
            name: "Orders",
            icon: faShoppingCart,
            url: "orders",
        },
        {
            name: "Subscribes",
            icon: faUsers,
            url: "subscribes",
        },
        {
            name: "Site info",
            icon: faSitemap,
            url: "siteInfo",
        },
    ];

    const adminPage = () => {
        switch (id) {
            case 'users':
                return <Users />;
            case 'flowers':
                return <Flowers />;
            case 'orders':
                return <Orders />;
            case 'subscribes':
                return <Subscribes />;
            case 'siteInfo':
                return <SiteInfo />;
            default:
                return <Users />;
        }
    };

    return (
        <div className="w-full min-h-screen flex justify-between">
            <div className="w-[300px] min-h-screen bg-gradient-to-br from-[#53C351] to-[#FFE978] flex flex-col items-center py-10 sticky top-0">
                <Logo />
                <div className="flex flex-col gap-5 mt-10">
                    {
                        nav.map((item) => (
                            <Link
                                to={`/admin/${item.url}`} 
                                className="font-[Fredoka] font-medium text-[24px] text-[#374a3d] cursor-pointer"
                                key={item.name}
                            >
                                <FontAwesomeIcon icon={item.icon} /> {item.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className="w-[calc(100%-300px)] min-h-screen">
                {adminPage()} 
            </div>
        </div>
    );
}

export default Admin;
