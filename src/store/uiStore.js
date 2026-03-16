import { create } from 'zustand';
export const useUIStore = create((set) => ({
    sidebarOpen: true,
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
    setSidebarOpen: (open) => set({ sidebarOpen: open }),
    toasts: [],
    addToast: (message, type = 'info') => set((state) => ({
        toasts: [
            ...state.toasts,
            { id: crypto.randomUUID(), message, type }
        ]
    })),
    removeToast: (id) => set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }))
}));
