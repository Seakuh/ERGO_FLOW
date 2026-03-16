import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDailyStore } from '../../store/dailyStore';
const getColorClass = (score) => {
    switch (score) {
        case 0:
            return 'bg-gray-100';
        case 1:
            return 'bg-blue-100';
        case 2:
            return 'bg-blue-200';
        case 3:
            return 'bg-blue-400';
        case 4:
            return 'bg-accent-primary';
        default:
            return 'bg-gray-100';
    }
};
const getMonthLabel = (date) => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDate();
    // Only show month labels on first day
    return day === 1 ? monthNames[date.getMonth()] : null;
};
export default function ContributionCalendar() {
    const { history, getScoreForDate } = useDailyStore();
    // Generate last 365 days
    const today = new Date();
    const days = [];
    for (let i = 364; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateString = date.toISOString().split('T')[0];
        days.push({ date, dateString });
    }
    // Group by weeks (Sun-Sat)
    const weeks = [];
    let currentWeek = [];
    days.forEach((day, index) => {
        currentWeek.push(day);
        if (currentWeek.length === 7 || index === days.length - 1) {
            weeks.push([...currentWeek]);
            currentWeek = [];
        }
    });
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (_jsxs("div", { className: "w-full", children: [_jsxs("div", { className: "flex gap-3 items-start mb-6 overflow-x-auto pb-2", children: [_jsx("div", { className: "flex flex-col gap-1 mt-8", children: dayNames.map((day) => (_jsx("div", { className: "w-8 h-3 text-xs text-gray-500 font-medium text-center", children: day.charAt(0) }, day))) }), _jsx("div", { className: "flex gap-1", children: weeks.map((week, weekIdx) => (_jsxs("div", { className: "flex flex-col gap-1", children: [week[0] && (_jsx("div", { className: "h-4 text-xs text-gray-500 font-medium leading-none mb-1", children: getMonthLabel(week[0].date) })), week.map((day, dayIdx) => {
                                    const score = getScoreForDate(day.dateString);
                                    const isToday = day.dateString === new Date().toISOString().split('T')[0];
                                    return (_jsx("div", { title: `${day.date.toLocaleDateString('en-US', {
                                            weekday: 'short',
                                            month: 'short',
                                            day: 'numeric'
                                        })} — ${score}/4 goals`, className: `w-3 h-3 rounded-sm transition-all cursor-pointer hover:ring-2 hover:ring-offset-1 hover:ring-accent-primary ${getColorClass(score)} ${isToday ? 'ring-2 ring-offset-1 ring-gray-400' : ''}` }, `${weekIdx}-${dayIdx}`));
                                })] }, weekIdx))) })] }), _jsxs("div", { className: "flex gap-2 items-center text-xs text-gray-500 mt-4", children: [_jsx("span", { children: "Less" }), _jsx("div", { className: "flex gap-1", children: [0, 1, 2, 3, 4].map((level) => (_jsx("div", { className: `w-2 h-2 rounded-sm ${getColorClass(level)}` }, level))) }), _jsx("span", { children: "More" })] })] }));
}
