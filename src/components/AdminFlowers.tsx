import { useQuery } from '@tanstack/react-query';
import { getDreamPlants } from '../services/DreamPlantService';

function AdminFlowers() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['flowers'],
        queryFn: getDreamPlants,
    });

    if (isLoading) {
        return <div className='w-full flex justify-center items-center gap-5 text-2xl'>Loading...</div>;
    }

    if (error) {
        return <div className='w-full flex justify-center items-center gap-5 text-2xl'>Error: {error.message}</div>;
    }

    return (
        <div className='w-full flex justify-center items-center gap-5 p-10'>
            {data && Array.isArray(data) && data.map((item: any) => (
                <div
                    key={item._id}
                    data-aos={item.aosItem}
                    data-aos-duration={item.duration}
                    id={`cart${item._id}`}
                    className='w-[360px] h-[450px] border-[0.5px] border-[rgba(0,0,0,0.36)] rounded-[37px] flex flex-col gap-5 items-center p-[40px]'
                >
                    <img src={`http://localhost:5173/${item.img}`} alt={item.name} className='max-h-[232px]' />

                    <div className='w-full flex flex-col gap-1'>
                        <h2 className='font-[Fredoka] font-[600] text-[24px] leading-[125%] text-[#374a3d] w-full'>
                            Name: <input type="text" defaultValue={item.name} className='bg-transparent border-none outline-none' />
                        </h2>
                        <p>Reviews: <input type="text" defaultValue={item.numberReviews} className='bg-transparent border-none outline-none' /></p>
                        <p>Price: <input type="text" defaultValue={item.price} className='bg-transparent border-none outline-none' /></p>
                        <p>AOS: <input type="text" defaultValue={item.aosItem} className='bg-transparent border-none outline-none' /></p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AdminFlowers;