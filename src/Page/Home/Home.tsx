import AboutUsScreen from "../../components/AboutUsScreen/AboutUsScreen";
import Banner from "../../components/Banner/Banner";
import DreamPlantScreen from "../../components/DreamPlantScreen/DreamPlantScreen";
import Footer from "../../components/Footer/Footer";
import HomeScreen from "../../components/HomeScreen/HomeScreen";
import SubscribeScreen from "../../components/SubscribeScreen/SubscribeScreen";

export const duration: number = 1000

function Home() {
    return (
        <div className="w-full min-h-screen flex flex-col px-[215px]">
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