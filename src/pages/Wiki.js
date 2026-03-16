import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { BookmarkIcon } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import { useWikiStore } from '../store/wikiStore';
const categories = [
    { value: 'all', label: 'All' },
    { value: 'anatomy', label: 'Anatomy' },
    { value: 'ergonomics', label: 'Ergonomics' },
    { value: 'conditions', label: 'Conditions' },
    { value: 'habits', label: 'Habits' },
    { value: 'equipment', label: 'Equipment' },
];
export default function Wiki() {
    const { articles, searchQuery, setSearchQuery, activeCategory, setActiveCategory, bookmarkedSlugs, toggleBookmark } = useWikiStore();
    const filteredArticles = articles.filter((article) => {
        if (activeCategory !== 'all' && article.category !== activeCategory)
            return false;
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            return (article.title.toLowerCase().includes(q) ||
                article.subtitle.toLowerCase().includes(q) ||
                article.tags.some((t) => t.toLowerCase().includes(q)));
        }
        return true;
    });
    return (_jsxs(PageContainer, { children: [_jsx("h1", { className: "text-4xl font-bold text-text-primary mb-2", children: "Knowledge Base" }), _jsx("p", { className: "text-lg text-text-secondary mb-8", children: "Learn about ergonomics, anatomy, and posture correction." }), _jsx(Card, { className: "mb-8", children: _jsxs("div", { className: "space-y-4", children: [_jsx(Input, { placeholder: "Search articles...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-text-primary mb-3", children: "Category" }), _jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((cat) => (_jsx("button", { onClick: () => setActiveCategory(cat.value), className: `px-3 py-1 rounded-pill text-sm font-medium transition-all ${activeCategory === cat.value
                                            ? 'bg-accent-primary text-white'
                                            : 'bg-gray-100 text-text-primary hover:bg-gray-200'}`, children: cat.label }, cat.value))) })] })] }) }), _jsxs("div", { children: [_jsxs("p", { className: "text-text-secondary text-sm mb-6", children: [filteredArticles.length, " article", filteredArticles.length !== 1 ? 's' : '', " found"] }), filteredArticles.length === 0 ? (_jsx(Card, { className: "text-center py-12", children: _jsx("p", { className: "text-text-secondary", children: "No articles found. Try adjusting your filters." }) })) : (_jsx("div", { className: "grid md:grid-cols-2 gap-6", children: filteredArticles.map((article) => {
                            const isBookmarked = bookmarkedSlugs.includes(article.slug);
                            return (_jsx(Link, { to: `/wiki/${article.slug}`, children: _jsxs(Card, { className: "h-full group", children: [_jsxs("div", { className: "flex justify-between items-start mb-3", children: [_jsx(Badge, { variant: "primary", children: article.category }), _jsx("button", { onClick: (e) => {
                                                        e.preventDefault();
                                                        toggleBookmark(article.slug);
                                                    }, className: `p-2 rounded-pill transition-colors ${isBookmarked
                                                        ? 'bg-accent-secondary text-white'
                                                        : 'bg-gray-100 text-text-secondary hover:bg-accent-secondary hover:text-white'}`, children: _jsx(BookmarkIcon, { className: "w-4 h-4", fill: "currentColor" }) })] }), _jsx("h3", { className: "text-xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors", children: article.title }), _jsx("p", { className: "text-text-secondary mb-4 line-clamp-2", children: article.subtitle }), _jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-gray-200", children: [_jsxs("span", { className: "text-xs text-text-secondary", children: [article.readingTimeMinutes, " min read"] }), _jsxs("div", { className: "flex gap-1 flex-wrap justify-end", children: [article.tags.slice(0, 2).map((tag) => (_jsx("span", { className: "inline-flex px-2 py-1 text-xs rounded-full bg-gray-100 text-text-secondary", children: tag }, tag))), article.tags.length > 2 && (_jsxs("span", { className: "inline-flex px-2 py-1 text-xs rounded-full bg-gray-100 text-text-secondary", children: ["+", article.tags.length - 2] }))] })] })] }) }, article.slug));
                        }) }))] })] }));
}
