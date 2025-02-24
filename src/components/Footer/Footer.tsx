import FlowerSVG from "../../assets/flowerSVG.svg";
import FlowerSVG2 from "../../assets/flowerSVG2.svg";
import FlowerSVG3 from "../../assets/flowerSVG3.svg";
import { duration } from "../../Page/Home/Home";
import Logo from "../Logo/Logo";

interface list {
    id: number,
    name: string
}

function Footer() {
    const Company: list[] = [
        {
            id: 1,
            name: "About"
        },
        {
            id: 2,
            name: "History"
        },
        {
            id: 3,
            name: "Vision & Mission"
        },
        {
            id: 4,
            name: "Career"
        },
        {
            id: 5,
            name: "Legal Notice"
        },
        {
            id: 6,
            name: "Blog & News"
        },
    ]

    const Support: list[] = [
        {
            id: 1,
            name: "Contact"
        },
        {
            id: 2,
            name: "FAQ"
        },
        {
            id: 3,
            name: "Help Center"
        },
        {
            id: 4,
            name: "Privacy Policy"
        },
        {
            id: 5,
            name: "Term & Service"
        },
        {
            id: 6,
            name: "Community"
        },
    ]

    return (
        <div className="w-full min-h-[80vh] flex flex-col pt-[100px]">
            <div className="w-full h-[45vh] flex justify-between">
                <div className="flex flex-col w-[25%] h-full gap-7">
                    <Logo />
                    <p data-aos="fade-right" data-aos-duration={duration} className="font-[Gilroy] font-medium text-[18px] leading-[178%] text-[#678570]">There are many variations of pass is ages of Lorem  available, but the majority have suffered alteration in  injected humour.</p>
                    <div data-aos="fade-up-right" data-aos-duration={duration} className="flex gap-5 items-center">
                        <svg className="cursor-pointer" width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.380859" width="41" height="39" rx="8" fill="#0CA941" />
                            <path d="M24.2792 21.6302L24.8498 18.0109H21.2831V15.6621C21.2831 14.6721 21.7811 13.7065 23.3787 13.7065H25V10.6252C25 10.6252 23.5289 10.3809 22.122 10.3809C19.1849 10.3809 17.2651 12.1146 17.2651 15.2527V18.0115H14V21.6309H17.2651V30.3809H21.2831V21.6309L24.2792 21.6302Z" fill="white" />
                        </svg>
                        <svg className="cursor-pointer" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 2.34649L16.0714 2.67597L17.3571 1.02856L15.1071 1.68752C12.2143 -1.60731 7.71429 2.01701 9 4.98236C3.85714 4.98236 1.28571 1.02856 1.28571 1.02856C1.28571 1.02856 -0.642857 3.99391 2.57143 6.30029L0.642857 5.64133C0.642857 7.61823 1.92857 8.93616 4.17857 9.59513H1.92857C3.21429 12.231 5.46429 12.231 5.46429 12.231C5.46429 12.231 3.53571 13.8784 0 13.8784C10.6071 19.1502 17.0357 9.26565 16.0714 3.99391L18 2.34649Z" fill="#678570" fill-opacity="0.53" />
                        </svg>
                        <svg className="cursor-pointer" width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.96908 0.380859C3.96079 0.380859 0 3.12158 0 7.55739C0 10.3782 1.54694 11.981 2.48448 11.981C2.87137 11.981 3.09388 10.8751 3.09388 10.5629C3.09388 10.1904 2.16822 9.39672 2.16822 7.84588C2.16822 4.62433 4.55894 2.34008 7.65282 2.34008C10.3129 2.34008 12.2818 3.89091 12.2818 6.73998C12.2818 8.86781 11.4499 12.8587 8.75412 12.8587C7.78157 12.8587 6.94904 12.1374 6.94904 11.104C6.94904 9.58905 7.98033 8.12284 7.98033 6.55983C7.98033 3.90758 4.31205 4.38841 4.31205 7.59393C4.31205 8.26709 4.39393 9.01205 4.68707 9.62559C4.14767 12.006 3.04638 15.552 3.04638 18.0042C3.04638 18.7613 3.15201 19.5069 3.22201 20.2641C3.35451 20.4167 3.28826 20.4006 3.4914 20.3244C5.46023 17.5593 5.39022 17.0188 6.28089 13.4004C6.76153 14.3384 8.00346 14.8429 8.98787 14.8429C13.1362 14.8429 15 10.6956 15 6.95731C15 2.97862 11.648 0.382142 7.96846 0.382142L7.96908 0.380859Z" fill="#678570" fill-opacity="0.53" />
                        </svg>
                        <svg className="cursor-pointer" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.78605 4.18773C3.78297 4.18773 4.59114 3.35499 4.59114 2.32775C4.59114 1.30051 3.78297 0.467773 2.78605 0.467773C1.78912 0.467773 0.980957 1.30051 0.980957 2.32775C0.980957 3.35499 1.78912 4.18773 2.78605 4.18773Z" fill="#678570" fill-opacity="0.53" />
                            <path d="M6.29562 5.59682V15.9158H9.40504V10.8128C9.40504 9.46632 9.65089 8.16232 11.2712 8.16232C12.8692 8.16232 12.889 9.70179 12.889 10.8978V15.9166H16.0001V10.2577C16.0001 7.47802 15.4193 5.3418 12.2661 5.3418C10.7523 5.3418 9.73751 6.19781 9.32254 7.00793H9.28046V5.59682H6.29562ZM1.22849 5.59682H4.34285V15.9158H1.22849V5.59682Z" fill="#678570" fill-opacity="0.53" />
                        </svg>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration={duration} className="w-[20%] h-full flex flex-col gap-5">
                    <h2 className="font-[GilroyBold] font-[700] text-[22px] leading-[145%] text-[#374a3d]">Company</h2>
                    <ul className="flex flex-col gap-2">
                        {Company.map((item) => (
                            <li className="cursor-pointer font-[Gilroy] font-normal text-[18px] leading-[150%]">{item.name}</li>
                        ))}
                    </ul>
                </div>
                <div data-aos="fade-up" data-aos-duration={duration} className="w-[20%] h-full flex flex-col gap-5">
                    <h2 className="font-[GilroyBold] font-[700] text-[22px] leading-[145%] text-[#374a3d]">Support</h2>
                    <ul className="flex flex-col gap-2">
                        {Support.map((item) => (
                            <li className="cursor-pointer font-[Gilroy] font-normal text-[18px] leading-[150%]">{item.name}</li>
                        ))}
                    </ul>
                </div>
                <div data-aos="fade-up-left" data-aos-duration={duration} className="w-[20%] h-full flex flex-col gap-2.5">
                    <h2 className="font-[GilroyBold] font-[700] text-[22px] leading-[145%] text-[#374a3d]">Contact</h2>
                    <p className="font-[Gilroy] font-normal text-[18px] leading-[150%]">Mirabazar-Subhanighat Rd, Sylhet-Bangladesh</p>
                    <h2 className="font-[GilroyBold] font-[700] text-[22px] leading-[145%] text-[#374a3d]">Email Us</h2>
                    <p className="font-[Gilroy] font-normal text-[18px] leading-[150%]">useremail@gmail.com</p>
                    <h2 className="font-[GilroyBold] font-[700] text-[22px] leading-[145%] text-[#374a3d]">Call Us</h2>
                    <p className="font-[Gilroy] font-normal text-[18px] leading-[150%]"> +6221.2002.2012</p>
                </div>
            </div>
            <div className="w-[300px] h-[300px] absolute left-[50px] mt-[370px] bg-[#53C351] blur-[150px] rounded-full z-[-1]"></div>
            <div className="w-[300px] h-[300px] absolute right-[50px] mt-[370px] bg-[#FFE978] blur-[150px] rounded-full z-[-1]"></div>
            <div className="w-full h-[40vh]">
                <hr className="bg-[#bf7949] h-[2px]" />
                <div className="w-full flex justify-between align-start relative mt-[-10px]">
                    <img src={FlowerSVG} className="h-[338px] duration-300 animate-[sway_4s_linear_infinite] origin-top" />
                    <img src={FlowerSVG2} className="h-[250px] duration-300 animate-[sway_4s_linear_infinite] origin-top" />
                    <img src={FlowerSVG3} className="h-[269px] duration-300 animate-[sway_4s_linear_infinite] origin-top" />
                    <img src={FlowerSVG2} className="h-[250px] duration-300 animate-[sway_4s_linear_infinite] origin-top" />
                    <img src={FlowerSVG} className="h-[338px] duration-300 animate-[sway_4s_linear_infinite] origin-top" />
                </div>
            </div>
        </div>
    );
}

export default Footer;