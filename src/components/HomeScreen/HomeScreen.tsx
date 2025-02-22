import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

function HomeScreen() {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <div className="w-[500px] h-[500px] absolute top-[-150px] left-[-150px] bg-[#53C351] blur-[250px] rounded-full z-[-1]"></div>
            <div className="w-[300px] h-[300px] absolute top-[70%] right-[400px] bg-[#53C351] blur-[250px] rounded-full z-[-1]"></div>
            <div className="w-[550px] h-[550px] absolute top-[-50px] right-0 bg-[#FFE978] blur-[200px] rounded-full z-[-1]"></div>
            <Header />
            <Main />
        </div>
    );
}

export default HomeScreen;