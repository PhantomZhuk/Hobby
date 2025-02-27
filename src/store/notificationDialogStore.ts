import { create } from "zustand";

interface NotificationDialogState {
    isOpenNotificationDialog: boolean;
    notificationInfo: string;
    setNotificationInfo: (info: string) => void;
    openNotificationDialog: () => void;
    closeNotificationDialog: () => void;
}

export const useNotificationDialogStore = create<NotificationDialogState>((set) => ({
    isOpenNotificationDialog: false,
    notificationInfo: "",
    setNotificationInfo: (info) => set({ notificationInfo: info }),
    openNotificationDialog: () => set({ isOpenNotificationDialog: true }),
    closeNotificationDialog: () => set({ isOpenNotificationDialog: false }),
}));
