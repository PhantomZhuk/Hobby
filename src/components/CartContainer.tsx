import { Button, Dialog, DialogPanel } from '@headlessui/react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCartShopping, faTrashCan, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useStore } from '../store/store'
import { useDialogStore } from '../store/dialogStore'

export default function CartContainer() {
    let [isOpen, setIsOpen] = useState(false)
    const cardProducts = useStore((state) => state.cardProducts)
    const deleteCardProduct = useStore((state) => state.deleteCardProduct)
    const increaseQuantity = useStore((state) => state.increaseQuantity)
    const decreaseQuantity = useStore((state) => state.decreaseQuantity)
    const { openDialog } = useDialogStore();

    function openDialogContainer() {
        if (cardProducts.length > 0) {
            openDialog();
            setIsOpen(false);
        }
    }

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                className="rounded-md bg-[#d4a000] cursor-pointer h-[41px] px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-[#ecc742]"
            >
                <FontAwesomeIcon icon={faCartShopping} />
            </Button>

            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={() => setIsOpen(false)} __demoMode>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-end">
                        <DialogPanel
                            transition
                            className="w-[500px] min-h-screen px-5 py-4 bg-gradient-to-br from-[#53C351] to-[#FFE978] data-[closed]:translate-x-full ease-in-out duration-300 flex flex-col justify-between"
                        >
                            <div className='w-full flex'>
                                <Button
                                    className="text-white text-[26px] font-[600] cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <FontAwesomeIcon icon={faXmark} />
                                </Button>
                            </div>
                            <div className='w-full flex flex-col gap-5 mt-2.5 h-[79vh]'>
                                {
                                    cardProducts.map((cardProduct) => (
                                        <div className='w-full h-[200px] bg-white flex justify-between p-4 rounded-2xl border border-[0.5px] border-[rgba(0, 0, 0, 0.36)]'>
                                            <img src={cardProduct.img} alt={cardProduct.name} />
                                            <div className='w-[55%] h-full flex flex-col justify-between'>
                                                <div className='flex flex-col gap-2'>
                                                    <h2 className='font-[GilroyBold] text-[20px]'>{cardProduct.name}</h2>
                                                    <p className='text-[#0ca941] font-[GilroyBold] text-[18px]'><span className='text-[#333]'>Price:</span> {cardProduct.price * cardProduct.quantity}$</p>
                                                </div>
                                                <div className='flex justify-between p-2.5'>
                                                    <div className='flex gap-3 items-center'>
                                                        <button className='w-[35px] h-[35px] bg-[#d4a000] text-white rounded-[10px] cursor-pointer' onClick={() => increaseQuantity(cardProduct._id)}><FontAwesomeIcon icon={faPlus} /></button>
                                                        <p className='text-[20px] font-[GilroyBold]'>{cardProduct.quantity}</p>
                                                        <button className='w-[35px] h-[35px] bg-[#d4a000] text-white rounded-[10px] cursor-pointer' onClick={() => decreaseQuantity(cardProduct._id)}><FontAwesomeIcon icon={faMinus} /></button>
                                                    </div>
                                                    <button className='w-[40px] h-[40px] bg-[#cc0000] hover:bg-[#f20000] text-white rounded-[10px] cursor-pointer' onClick={() => deleteCardProduct(cardProduct._id)}><FontAwesomeIcon icon={faTrashCan} /></button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='w-full flex items-center justify-center h-[100px]'>
                                <button className='w-[200px] h-[50px] bg-[#0ca941] cursor-pointer hover:bg-[#0ecf4f] text-white rounded-[10px] text-[20px] font-medium' onClick={() => {
                                    openDialogContainer();
                                }}>Buy</button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
