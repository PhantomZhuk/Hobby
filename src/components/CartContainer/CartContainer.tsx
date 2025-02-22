import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function CartContainer() {
    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>
            <Button
                onClick={open}
                className="rounded-md bg-[#d4a000] cursor-pointer h-[41px] px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-[#ecc742]"
            >
                <FontAwesomeIcon icon={faCartShopping} />
            </Button>

            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-end">
                        <DialogPanel
                            transition
                            className="w-[500px] h-screen px-5 py-4 bg-gradient-to-br from-[#53C351] to-[#FFE978] data-[closed]:translate-x-full ease-in-out duration-300"
                        >
                            <div className='w-full flex'>
                                <Button
                                    className="text-white text-[26px] font-[600] cursor-pointer"
                                    onClick={close}
                                >
                                    <FontAwesomeIcon icon={faXmark} />
                                </Button>
                            </div>
                            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                                Payment successful
                            </DialogTitle>
                            <p className="mt-2 text-sm/6 text-white/50">
                                Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                                order.
                            </p>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
