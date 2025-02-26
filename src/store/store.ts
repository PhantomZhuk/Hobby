import { create } from "zustand";

export interface CardProduct {
    _id: string;
    name: string;
    img: string;
    price: number;
    numberReviews: number;
    quantity: number;
}

interface Store {
    cardProducts: CardProduct[];
    addCardProduct: (cardProduct: CardProduct) => void;
    deleteCardProduct: (id: string) => void;
    clearCardProducts: () => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
}

const getLocalStorage = () => localStorage.getItem("cardProducts") ? JSON.parse(localStorage.getItem("cardProducts")!) : [];

export const useStore = create<Store>((set) => ({
    cardProducts: getLocalStorage() || [],
    addCardProduct: (cardProduct) => {
        set((state) => {
            const existingProduct = state.cardProducts.find((card) => card._id === cardProduct._id);

            let updatedProducts;
            if (existingProduct) {
                updatedProducts = state.cardProducts.map((card) =>
                    card._id === cardProduct._id
                        ? { ...card, quantity: card.quantity + 1 }
                        : card
                );
            } else {
                updatedProducts = [...state.cardProducts, { ...cardProduct, quantity: 1 }];
            }

            localStorage.setItem("cardProducts", JSON.stringify(updatedProducts));

            return {
                cardProducts: updatedProducts,
            };
        });
    },
    increaseQuantity: (id: string) => {
        set((state) => {
            const updatedProducts = state.cardProducts.map((card) => {
                if (card._id === id) {
                    return { ...card, quantity: card.quantity + 1 };
                }
                return card;
            });

            localStorage.setItem("cardProducts", JSON.stringify(updatedProducts));

            return { cardProducts: updatedProducts };
        });
    },
    decreaseQuantity: (id: string) => {
        set((state) => {
            const updatedProducts = state.cardProducts
                .map((card) => {
                    if (card._id === id) {
                        return { ...card, quantity: card.quantity - 1 };
                    }
                    return card;
                })
                .filter((card) => card.quantity > 0);

            localStorage.setItem("cardProducts", JSON.stringify(updatedProducts));

            return { cardProducts: updatedProducts };
        });
    },
    deleteCardProduct: (id: string) => {
        set((state) => {
            const updatedProducts = state.cardProducts.filter((card) => card._id !== id);
            localStorage.setItem("cardProducts", JSON.stringify(updatedProducts));

            return { cardProducts: updatedProducts };
        });
    },
    clearCardProducts: () => {
        set(() => {
            localStorage.setItem("cardProducts", JSON.stringify([]));
            return { cardProducts: [] };
        });
    }
}));
