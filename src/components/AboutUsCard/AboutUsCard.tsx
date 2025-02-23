function AboutUsCard({ svg, header, text }: { svg: any, header: string, text: string }) {
    return (
        <div className="z-2 w-[268px] h-[264px] rounded-[10px] shadow-[8px 9px 42px 0 rgba(12, 169, 65, 0.12)] bg-white flex flex-col gap-5 items-center justify-center">
            {svg}
            <h2 className="font-[Fredoka] font-[600] text-[24px] leading-[108%] text-[#374a3d] text-center">{header}</h2>
            <p className="font-medium font-[Gilroy] text-[16px] leading-[150%] text-[#678570] text-center">{text}</p>
        </div>
    );
}

export default AboutUsCard;