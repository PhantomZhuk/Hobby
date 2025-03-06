import { duration } from '../Page/Home';
import DreamPlantCartContainer from './DreamPlantCartContainer';

function DreamPlantScreen() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center gap-10">
            <div data-aos="fade-down" data-aos-duration={duration} className="w-full flex flex-col gap-5 items-center">
                <h2 className="font-[Fredoka] font-[600] text-[36px] leading-[167%] text-[#374a3d] text-center">Choose your Dream Plant</h2>
                <p className="font-[Gilroy] font-medium text-[18px] leading-[178%] text-[#678570] text-center w-[550px]">
                    Many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                </p>
            </div>
            <DreamPlantCartContainer />
        </div>
    );
}

export default DreamPlantScreen;