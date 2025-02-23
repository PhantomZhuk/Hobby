import flower1 from '../../assets/flower1.png'
import flower2 from '../../assets/flower2.png'
import flower3 from '../../assets/flower3.png'
import DreamPlantCart from '../DreamPlantCart/DreamPlantCart'

interface dreamPlant {
    id: number,
    img: string,
    name: string,
    price: number,
    numberReviews: number
}

function DreamPlantScreen() {
    const dreamPlant: dreamPlant[] = [
        {
            id: 1,
            img: flower1,
            name: 'Indoors Tropical Plant',
            price: 150,
            numberReviews: 134,
        },
        {
            id: 2,
            img: flower2,
            name: 'Monstera Deliciosa Care',
            price: 200,
            numberReviews: 120,
        },
        {
            id: 3,
            img: flower3,
            name: 'Indoors Leaf Potted',
            price: 150,
            numberReviews: 183,
        },
    ]

    return (
        <div className="w-full min-h-screen flex flex-col justify-center gap-10">
            <div className="w-full flex flex-col gap-5 items-center">
                <h2 className="font-[Fredoka] font-[600] text-[36px] leading-[167%] text-[#374a3d] text-center">Choose your Dream Plant</h2>
                <p className="font-[Gilroy] font-medium text-[18px] leading-[178%] text-[#678570] text-center w-[550px]">Many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</p>
            </div>
            <div className="w-full flex justify-center items-center gap-5">
                {dreamPlant.map((item) => (
                    <DreamPlantCart key={item.id} img={item.img} name={item.name} price={item.price} numberReviews={item.numberReviews}/>
                ))}
            </div>
        </div>
    );
}

export default DreamPlantScreen;