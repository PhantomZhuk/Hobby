import bannerPhoto from "../assets/Lovepik_com-401306819-plant-pot 1.png"
import { duration } from "../Page/Home";
import Counter from "./Counter";

function Banner() {
    return (
        <div className="w-full h-[40vh] flex items-center justify-center">
            <div className="w-[350px] h-[350px] absolute left-[-150px] bg-[#FFE978] blur-[150px] rounded-full z-[-1]"></div>
            <div data-aos="fade-right" data-aos-duration={duration} className="rounded-[28px] w-full h-[234px] bg-white flex items-center justify-between shadow-[23px 19px 138px -45px rgba(12, 169, 65, 0.13)] ">
                <img src={bannerPhoto} alt="" className="relative ml-[-100px] mt-[-60px]" />
                <div className="flex flex-col gap-3 w-[350px] ml-[-50px]">
                    <h2 className="font-[600] text-[30px] leading-[133%] text-[#374a3d] font-[Fredoka]">We Give Awesome Landscape Service.</h2>
                    <p className="font-medium text-[16px] leading-[162%] text-[#5b7262] font-[Gilroy]">It is a long established fact that a reader will be distracted by the thing.</p>
                </div>
                <div className="flex gap-15 pr-[45px]">
                    <Counter targetNumber={25} text="Complete Project Per Month." />
                    <Counter targetNumber={10} text="Years Practical Experience." />
                    <Counter targetNumber={60} text="Awesome Team Members." />
                </div>
            </div>
        </div>
    );
}

export default Banner;