import { create } from "zustand";

interface DialogState {
    isOpenContainer: boolean;
    openDialog: () => void;
    closeDialog: () => void;
}

export const useDialogStore = create<DialogState>((set) => ({
    isOpenContainer: false,
    openDialog: () => set({ isOpenContainer: true }),
    closeDialog: () => set({ isOpenContainer: false }),
}));
