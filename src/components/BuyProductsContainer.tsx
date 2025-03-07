import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Dialog, DialogPanel } from '@headlessui/react'
import { QueryClient, useMutation } from '@tanstack/react-query';
import { useDialogStore } from '../store/dialogStore';
import { useStore } from '../store/store';
import { getTotalPrice } from '../utils/getTotalPrice';
import { createOrder } from '../services/OrderService';

const queryClient = new QueryClient();

export default function BuyProductsContainer() {
    const { isOpenContainer, closeDialog } = useDialogStore();
    const clearCardProducts = useStore((state) => state.clearCardProducts);

    const mutation = useMutation({
        mutationFn: createOrder,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['products'],
                exact: true,
            });
        },
    });

    function clearCard() {
        const userNameInput = document.getElementById('userName') as HTMLInputElement | null;
        const userEmailInput = document.getElementById('userEmail') as HTMLInputElement | null;
        const userPhoneInput = document.getElementById('userPhone') as HTMLInputElement | null;
        if (userNameInput && userEmailInput && userPhoneInput) {
            userNameInput.value = '';
            userEmailInput.value = '';
            userPhoneInput.value = '';
        }
        clearCardProducts();
        closeDialog();
    }

    return (
        <Dialog open={isOpenContainer} as="div" className="relative z-10 focus:outline-none" onClose={closeDialog} __demoMode>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="w-[450px] h-[400px] rounded-xl bg-gradient-to-br from-[#53C351] to-[#FFE978] px-6 py-4 pb-[30px] backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 flex flex-col justify-between"
                    >
                        <div className='w-full flex justify-end'>
                            <Button
                                className="text-white text-[26px] font-[600] cursor-pointer"
                                onClick={closeDialog}
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </Button>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <input type="text" placeholder='Введіть ваше ім’я' id='userName' className='w-full h-[60px] bg-white outline-none pl-3 rounded-[7px] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#333]' />
                            <input type="email" placeholder='Введіть вашу електронну пошту' id='userEmail' className='w-full h-[60px] bg-white outline-none pl-3 rounded-[7px] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#333]' />
                            <input type="tel" placeholder='Введіть ваш телефон' id='userPhone' className='w-full h-[60px] bg-white outline-none pl-3 rounded-[7px] font-[Gilroy] font-[600] text-[18px] leading-[178%] text-[#333]' />
                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <button className='w-[200px] h-[50px] bg-[#0ca941] cursor-pointer hover:bg-[#0ecf4f] text-white rounded-[10px] text-[20px] font-medium' onClick={() => {
                                mutation.mutate({
                                    orders: localStorage.getItem('cardProducts') ? JSON.parse(localStorage.getItem('cardProducts')!) : [],
                                    totalPrice: getTotalPrice(),
                                    date: new Date(),
                                    customerName: (document.getElementById('userName') as HTMLInputElement)?.value,
                                    customerEmail: (document.getElementById('userEmail') as HTMLInputElement)?.value,
                                    customerPhone: (document.getElementById('userPhone') as HTMLInputElement)?.value,
                                })
                                clearCard();
                            }}>Купити</button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}