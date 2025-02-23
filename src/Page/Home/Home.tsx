import AboutUsScreen from "../../components/AboutUsScreen/AboutUsScreen";
import Banner from "../../components/Banner/Banner";
import DreamPlantScreen from "../../components/DreamPlantScreen/DreamPlantScreen";
import HomeScreen from "../../components/HomeScreen/HomeScreen";
import SubscribeScreen from "../../components/SubscribeScreen/SubscribeScreen";


function Home() {
    return (
        <div className="w-full min-h-screen flex flex-col px-[215px]">
            <HomeScreen />
            <Banner />
            <AboutUsScreen />
            <DreamPlantScreen />
            <SubscribeScreen />
        </div>
    );
}

export default Home;