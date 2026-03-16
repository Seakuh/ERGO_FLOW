import { create } from 'zustand';
import { wikiManifest } from '../data/wiki/index';
export const useWikiStore = create((set) => ({
    articles: wikiManifest,
    searchQuery: '',
    setSearchQuery: (q) => set({ searchQuery: q }),
    activeCategory: 'all',
    setActiveCategory: (cat) => set({ activeCategory: cat }),
    bookmarkedSlugs: [],
    toggleBookmark: (slug) => set((state) => ({
        bookmarkedSlugs: state.bookmarkedSlugs.includes(slug)
            ? state.bookmarkedSlugs.filter((s) => s !== slug)
            : [...state.bookmarkedSlugs, slug]
    }))
}));
