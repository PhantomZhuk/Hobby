import { duration } from "../../Page/Home/Home";

function SubscribeScreen() {
    return (
        <div className="w-full min-h-[80vh] flex items-center justify-between">
            <div className="w-[400px] h-[400px] absolute right-[50px] mt-[-300px] bg-[#53C351] blur-[150px] rounded-full z-[-1]"></div>
            <div className="w-[350px] h-[350px] absolute mt-[300px] left-[-50px] bg-[#FFE978] blur-[150px] rounded-full z-[-1]"></div>
            <div data-aos="fade-left" data-aos-duration={duration} className="w-full h-[60vh] bg-[#f8f8f8]/[0.5] backdrop-blur-lg p-6 shadow-lg rounded-[19px] py-[120px] px-[280px] flex flex-col items-center justify-center gap-5">
                <h2 className="font-[Fredoka] font-[600] text-[36px] leading-[167%] text-[#374a3d]">Ready to bring idea for your garden?</h2>
                <p className="font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#678570] text-center">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete</p>
                <div className="w-full flex items-center justify-between">
                    <input type="email" placeholder="Enter your email" className="border border-[#0ca941] rounded-[10px] w-[491px] h-[81px] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#333] pl-[35px] outline-none"/>
                    <button className="relative ml-[-100px] cursor-pointer rounded-[10px] w-[223px] h-[81px] bg-[#0ca941] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#fff]">Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default SubscribeScreen;