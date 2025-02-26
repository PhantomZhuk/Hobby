import { useQuery } from '@tanstack/react-query';
import DreamPlantCart from '../DreamPlantCart/DreamPlantCart';
import { useStore } from '../../store/store';

function DreamPlantCartContainer() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['flowers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/flowers/allFlowers')
            const result = await res.json();
            console.log("Fetched data:", result);
            return result;
        },
    });
    const addCardProduct = useStore(state => state.addCardProduct);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
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