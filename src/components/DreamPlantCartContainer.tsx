import { useQuery } from '@tanstack/react-query';
import { useStore } from '../store/store';
import { getDreamPlants } from '../services/dreamPlantService';
import DreamPlantCart from './DreamPlantCart';

function DreamPlantCartContainer() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['flowers'],
        queryFn: getDreamPlants,
    });
    const addCardProduct = useStore(state => state.addCardProduct);

    if (isLoading) {
        return <div className='w-full flex justify-center items-center gap-5 text-2xl'>Loading...</div>;
    }

    if (error) {
        return <div className='w-full flex justify-center items-center gap-5 text-2xl'>Error: {error.message}</div>;
    }

    return (
        <div className="w-full flex justify-center items-center gap-5">
            {data && Array.isArray(data) && data.map((item: any) => (
                <DreamPlantCart
                    id={item._id?.$oid || item._id}
                    key={item._id?.$oid || item._id}
                    img={item.img}
                    name={item.name}
                    price={Number(item.price?.$numberInt || item.price)}
                    numberReviews={Number(item.numberReviews?.$numberInt || item.numberReviews)}
                    aos={item.aosItem}
                    onclick={() => addCardProduct({
                        _id: item._id?.$oid || item._id,
                        name: item.name,
                        img: item.img,
                        price: Number(item.price?.$numberInt || item.price),
                        numberReviews: Number(item.numberReviews?.$numberInt || item.numberReviews),
                        quantity: item.quantity
                    })}
                />
            ))}
        </div>
    );
}

export default DreamPlantCartContainer;