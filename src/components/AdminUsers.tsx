import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../services/UserService';

function Users() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['flowers'],
        queryFn: getUsers,
    });

    if (isLoading) {
        return <div className='w-full flex justify-center items-center gap-5 text-2xl'>Loading...</div>;
    }

    if (error) {
        return <div className='w-full flex justify-center items-center gap-5 text-2xl'>Error: {error.message}</div>;
    }

    return (
        <div className='w-full flex justify-center items-center flex-wrap gap-5 py-10 px-3'>
            {data && Array.isArray(data) && data.map((item: any) => (
                <div key={item._id} className='w-[400px] flex gap-5 flex-col border-[0.5px] border-[rgba(0,0,0,0.36)] bg-[#f8f8f8]/[0.5] backdrop-blur-lg rounded-2xl p-3'>
                    <input type="text" defaultValue={item.name} className='font-[Fredoka] font-normal text-[18px] outline-none'/>
                    <input type="text" defaultValue={item.email} className='font-[Fredoka] font-normal text-[18px] outline-none'/>
                    <input type="text" defaultValue={item.phone} className='font-[Fredoka] font-normal text-[18px] outline-none'/>
                    <input type="text" defaultValue={item.password} className='font-[Fredoka] font-normal text-[18px] outline-none'/>
                    <input type="text" defaultValue={item.isAdmin} className='font-[Fredoka] font-normal text-[18px] outline-none'/>
                </div>
            ))}
        </div>
    );
}

export default Users;