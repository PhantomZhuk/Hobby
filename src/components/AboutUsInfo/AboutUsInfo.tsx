import ButtonBlock from "../ButtonBlock/ButtonBlock";

function AboutUsInfo({ header, text1, text2 }: { header: string, text1: string, text2: string }) {
    return (
        <div className="w-[40%] h-full flex flex-col gap-5">
            <h2 className="font-[Fredoka] font-[600] text-[36px] leading-[122%] text-[#374a3d]">{header}</h2>
            <p className="font-medium font-[Gilroy] text-[18px] leading-[178%] text-[#678570]">{text1}</p>
            <p className="font-medium font-[Gilroy] text-[18px] leading-[178%] text-[#678570]">{text2}</p>
            <ButtonBlock text="Read More" />
        </div>
    );
}

export default AboutUsInfo;