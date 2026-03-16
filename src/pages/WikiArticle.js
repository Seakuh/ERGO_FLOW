import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Bookmark } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { useWikiStore } from '../store/wikiStore';
import { forwardHeadPosture, thoracicSpineMobility, deskSetupGuide, upperCrossedSyndrome, scapularStability, } from '../data/wiki/articles';
import { useExerciseStore } from '../store/exerciseStore';
const articleRegistry = {
    'forward-head-posture': forwardHeadPosture,
    'thoracic-spine-mobility': thoracicSpineMobility,
    'desk-setup-guide': deskSetupGuide,
    'upper-crossed-syndrome': upperCrossedSyndrome,
    'scapular-stability': scapularStability,
};
export default function WikiArticle() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { bookmarkedSlugs, toggleBookmark } = useWikiStore();
    const { exercises } = useExerciseStore();
    const article = articleRegistry[slug || ''];
    const isBookmarked = bookmarkedSlugs.includes(slug || '');
    if (!article) {
        return (_jsx(PageContainer, { children: _jsxs("div", { className: "text-center py-12", children: [_jsx("h1", { className: "text-2xl font-bold text-text-primary mb-4", children: "Article not found" }), _jsx(Link, { to: "/wiki", children: _jsx("button", { className: "inline-flex items-center gap-2 px-6 py-2 bg-accent-primary text-white rounded-pill font-medium hover:shadow-card-hover transition-shadow", children: "Back to Wiki" }) })] }) }));
    }
    const relatedExercises = exercises.filter((e) => article.relatedExerciseIds.includes(e.id));
    return (_jsxs(PageContainer, { children: [_jsxs("button", { onClick: () => navigate(-1), className: "flex items-center gap-2 text-accent-primary hover:underline mb-6 font-medium", children: [_jsx(ArrowLeft, { className: "w-5 h-5" }), "Back"] }), _jsxs("div", { className: "mb-8", children: [_jsxs("div", { className: "flex items-start justify-between gap-4 mb-4", children: [_jsxs("div", { children: [_jsx(Badge, { variant: "primary", className: "mb-4", children: article.category }), _jsx("h1", { className: "text-4xl font-bold text-text-primary mb-2", children: article.title }), _jsx("p", { className: "text-lg text-text-secondary", children: article.subtitle })] }), _jsx("button", { onClick: () => toggleBookmark(article.slug), className: `flex-shrink-0 p-3 rounded-card transition-colors ${isBookmarked
                                    ? 'bg-accent-secondary text-white'
                                    : 'bg-gray-100 text-text-secondary hover:bg-accent-secondary hover:text-white'}`, children: _jsx(Bookmark, { className: "w-6 h-6", fill: isBookmarked ? 'currentColor' : 'none' }) })] }), _jsxs("div", { className: "text-sm text-text-secondary flex gap-4", children: [_jsxs("span", { children: [article.readingTimeMinutes, " min read"] }), _jsx("span", { children: "\u2022" }), _jsxs("span", { children: ["Updated ", new Date(article.updatedAt).toLocaleDateString()] })] })] }), _jsxs("div", { className: "grid lg:grid-cols-4 gap-8", children: [_jsx("div", { className: "lg:col-span-3", children: article.sections.map((section, idx) => (_jsxs("div", { className: "mb-12", children: [_jsx("h2", { id: section.id, className: "text-2xl font-bold text-text-primary mb-4 scroll-mt-20", children: section.heading }), _jsx("p", { className: "text-text-primary leading-relaxed whitespace-pre-wrap", children: section.content })] }, idx))) }), _jsxs("div", { className: "lg:col-span-1", children: [article.sections.length > 0 && (_jsxs(Card, { className: "mb-6 sticky top-8", children: [_jsx("h3", { className: "font-bold text-text-primary mb-4", children: "Contents" }), _jsx("ul", { className: "space-y-2 text-sm", children: article.sections.map((section) => (_jsx("li", { children: _jsx("a", { href: `#${section.id}`, className: "text-accent-primary hover:underline", children: section.heading }) }, section.id))) })] })), article.relatedSlugs.length > 0 && (_jsxs(Card, { children: [_jsx("h3", { className: "font-bold text-text-primary mb-4", children: "Related Articles" }), _jsx("ul", { className: "space-y-3", children: article.relatedSlugs.map((relatedSlug) => (_jsx("li", { children: _jsx(Link, { to: `/wiki/${relatedSlug}`, className: "text-accent-primary hover:underline text-sm", children: relatedSlug.replace(/-/g, ' ') }) }, relatedSlug))) })] }))] })] }), relatedExercises.length > 0 && (_jsxs("div", { className: "mt-16", children: [_jsx("h2", { className: "text-2xl font-bold text-text-primary mb-6", children: "Related Exercises" }), _jsx("div", { className: "grid md:grid-cols-3 gap-6", children: relatedExercises.map((exercise) => (_jsx(Link, { to: `/exercises/${exercise.id}`, children: _jsxs(Card, { children: [_jsx("h3", { className: "font-bold text-lg text-text-primary mb-2", children: exercise.name }), _jsx("p", { className: "text-sm text-text-secondary mb-4", children: exercise.shortDescription }), _jsx(Badge, { variant: "secondary", className: "text-xs", children: exercise.difficulty })] }) }, exercise.id))) })] }))] }));
}
