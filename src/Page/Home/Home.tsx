import AboutUsScreen from "../../components/AboutUsScreen/AboutUsScreen";
import Banner from "../../components/Banner/Banner";
import HomeScreen from "../../components/HomeScreen/HomeScreen";


function Home() {
    return (
        <div className="w-full min-h-screen flex flex-col px-[215px]">
            <HomeScreen />
            <Banner />
            <AboutUsScreen />
        </div>
    );
}

export default Home;