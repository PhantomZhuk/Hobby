import AboutUsScreen from "../components/AboutUsScreen";
import Banner from "../components/Banner";
import BuyProductsContainer from "../components/BuyProductsContainer";
import DreamPlantScreen from "../components/DreamPlantScreen";
import Footer from "../components/Footer";
import HomeScreen from "../components/HomeScreen";
import NotificationDialog from "../components/NotificationDialog";
import SubscribeScreen from "../components/SubscribeScreen";

export const duration: number = 1000

function Home() {
    return (
        <div className="w-full min-h-screen flex flex-col px-[215px]">
            <NotificationDialog />
            <BuyProductsContainer />
            <HomeScreen />
            <Banner />
            <AboutUsScreen />
            <DreamPlantScreen />
            <SubscribeScreen />
            <Footer />
        </div>
    );
}

export default Home;