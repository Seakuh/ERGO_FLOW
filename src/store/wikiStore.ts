import { create } from 'zustand';
import { WikiManifestEntry } from '../types/wiki';
import { wikiManifest } from '../data/wiki/index';

interface WikiStore {
  articles: WikiManifestEntry[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: string | 'all';
  setActiveCategory: (cat: string) => void;
  bookmarkedSlugs: string[];
  toggleBookmark: (slug: string) => void;
}

export const useWikiStore = create<WikiStore>((set) => ({
  articles: wikiManifest,
  searchQuery: '',
  setSearchQuery: (q) => set({ searchQuery: q }),
  activeCategory: 'all',
  setActiveCategory: (cat) => set({ activeCategory: cat }),
  bookmarkedSlugs: [],
  toggleBookmark: (slug) =>
    set((state) => ({
      bookmarkedSlugs: state.bookmarkedSlugs.includes(slug)
        ? state.bookmarkedSlugs.filter((s) => s !== slug)
        : [...state.bookmarkedSlugs, slug]
    }))
}));
