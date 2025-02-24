import { duration } from "../../Page/Home/Home";
import ButtonBlock from "../ButtonBlock/ButtonBlock";

function AboutUsInfo({ header, text1, text2, aos }: { header: string, text1: string, text2: string, aos: string }) {
    if (aos === "fade-left") {
        return (
            <div className="w-[40%] h-full flex flex-col gap-5">
                <h2 data-aos="fade-down-left" data-aos-duration={duration} className="font-[Fredoka] font-[600] text-[36px] leading-[122%] text-[#374a3d]">{header}</h2>
                <p data-aos="fade-left" data-aos-duration={duration} className="font-medium font-[Gilroy] text-[18px] leading-[178%] text-[#678570]">{text1}</p>
                <p data-aos="fade-left" data-aos-duration={duration} className="font-medium font-[Gilroy] text-[18px] leading-[178%] text-[#678570]">{text2}</p>
                <ButtonBlock aos="fade-up-left" text="Read More" />
            </div>
        );
    }else if(aos === "fade-right"){
        return (
            <div className="w-[40%] h-full flex flex-col gap-5">
                <h2 data-aos="fade-down-right" data-aos-duration={duration} className="font-[Fredoka] font-[600] text-[36px] leading-[122%] text-[#374a3d]">{header}</h2>
                <p data-aos="fade-right" data-aos-duration={duration} className="font-medium font-[Gilroy] text-[18px] leading-[178%] text-[#678570]">{text1}</p>
                <p data-aos="fade-right" data-aos-duration={duration} className="font-medium font-[Gilroy] text-[18px] leading-[178%] text-[#678570]">{text2}</p>
                <ButtonBlock aos="fade-up-right" text="Read More" />
            </div>
        );
    }
    
}

export default AboutUsInfo;