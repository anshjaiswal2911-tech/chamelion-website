import { motion } from 'motion/react';
import {
    TrendingUp, TrendingDown, DollarSign, PiggyBank, Activity,
    BarChart3, Filter, Download, Calendar, Zap, Target, Clock,
    ChevronRight, Sparkles, ArrowUpRight
} from 'lucide-react';
import { stats, budgets, transactions, timeSeriesData, insights, categoryAnalysis, goals, monthlyComparison } from '@/app/data/mockData';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function AnalyticsPage() {
    const COLORS = ['#8B5CF6', '#10B981', '#F59E0B', '#EC4899', '#3B82F6', '#EF4444', '#A78BFA'];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-[#0B0F14] text-[#E5E7EB] pt-24"
        >
            <div className="max-w-[1920px] mx-auto p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] rounded-xl flex items-center justify-center">
                            <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-[#E5E7EB]">Analytics Dashboard</h1>
                            <p className="text-sm text-[#6B7280] font-mono">Comprehensive Financial Insights</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2.5 bg-[#1F2937] hover:bg-[#374151] rounded-lg text-sm flex items-center gap-2 transition-colors border border-[#374151]">
                            <Filter className="w-4 h-4" />
                            Filters
                        </button>
                        <button className="px-4 py-2.5 bg-[#1F2937] hover:bg-[#374151] rounded-lg text-sm flex items-center gap-2 transition-colors border border-[#374151]">
                            <Calendar className="w-4 h-4" />
                            Jan 2026
                        </button>
                        <button className="px-4 py-2.5 bg-gradient-to-r from-[#A78BFA] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#7C3AED] rounded-lg text-sm flex items-center gap-2 transition-colors text-white font-medium">
                            <Download className="w-4 h-4" />
                            Export Report
                        </button>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-5 gap-4">
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.05 }}
                        className="bg-gradient-to-br from-[#1F2937] to-[#111827] border border-[#374151] rounded-xl p-5 hover:border-[#6EE7B7] transition-all"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 bg-[#6EE7B7]/10 rounded-lg flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-[#6EE7B7]" />
                            </div>
                            <div className="flex items-center gap-1 text-[#6EE7B7] text-xs font-mono">
                                <TrendingUp className="w-3 h-3" />
                                +12.5%
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-[#E5E7EB] mb-1">
                            ${stats.totalIncome.toLocaleString()}
                        </div>
                        <div className="text-xs text-[#9CA3AF] font-mono uppercase tracking-wide">Total Income</div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-[#1F2937] to-[#111827] border border-[#374151] rounded-xl p-5 hover:border-[#F87171] transition-all"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 bg-[#F87171]/10 rounded-lg flex items-center justify-center">
                                <TrendingDown className="w-5 h-5 text-[#F87171]" />
                            </div>
                            <div className="flex items-center gap-1 text-[#F87171] text-xs font-mono">
                                <TrendingDown className="w-3 h-3" />
                                -5.2%
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-[#E5E7EB] mb-1">
                            ${stats.totalExpenses.toLocaleString()}
                        </div>
                        <div className="text-xs text-[#9CA3AF] font-mono uppercase tracking-wide">Total Expenses</div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="bg-gradient-to-br from-[#1F2937] to-[#111827] border border-[#374151] rounded-xl p-5 hover:border-[#60A5FA] transition-all"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 bg-[#60A5FA]/10 rounded-lg flex items-center justify-center">
                                <PiggyBank className="w-5 h-5 text-[#60A5FA]" />
                            </div>
                            <div className="flex items-center gap-1 text-[#60A5FA] text-xs font-mono">
                                <TrendingUp className="w-3 h-3" />
                                +18.3%
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-[#E5E7EB] mb-1">
                            ${stats.totalSavings.toLocaleString()}
                        </div>
                        <div className="text-xs text-[#9CA3AF] font-mono uppercase tracking-wide">Net Savings</div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-[#1F2937] to-[#111827] border border-[#374151] rounded-xl p-5 hover:border-[#A78BFA] transition-all"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 bg-[#A78BFA]/10 rounded-lg flex items-center justify-center">
                                <Activity className="w-5 h-5 text-[#A78BFA]" />
                            </div>
                            <div className="flex items-center gap-1 text-[#A78BFA] text-xs font-mono">
                                <TrendingUp className="w-3 h-3" />
                                +3.1%
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-[#E5E7EB] mb-1">
                            {stats.savingsRate}%
                        </div>
                        <div className="text-xs text-[#9CA3AF] font-mono uppercase tracking-wide">Savings Rate</div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        className="bg-gradient-to-br from-[#1F2937] to-[#111827] border border-[#374151] rounded-xl p-5 hover:border-[#F59E0B] transition-all"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center">
                                <BarChart3 className="w-5 h-5 text-[#F59E0B]" />
                            </div>
                            <div className="flex items-center gap-1 text-[#10B981] text-xs font-mono">
                                <TrendingUp className="w-3 h-3" />
                                +8.5%
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-[#E5E7EB] mb-1">
                            ${stats.avgDailySpending.toFixed(0)}
                        </div>
                        <div className="text-xs text-[#9CA3AF] font-mono uppercase tracking-wide">Avg Daily Spend</div>
                    </motion.div>
                </div>

                {/* Main Analytics Grid */}
                <div className="grid grid-cols-12 gap-6">
                    {/* Cash Flow Analysis */}
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="col-span-8 bg-[#1F2937] border border-[#374151] rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#6EE7B7]/10 rounded-lg flex items-center justify-center">
                                    <Activity className="w-5 h-5 text-[#6EE7B7]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#E5E7EB]">CASH FLOW ANALYSIS</h3>
                                    <p className="text-xs text-[#6B7280]">Real-time tracking • Last 30 days</p>
                                </div>
                            </div>
                            <div className="flex gap-4 text-xs font-mono">
                                <span className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#6EE7B7]"></div>
                                    INCOME
                                </span>
                                <span className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#F87171]"></div>
                                    EXPENSES
                                </span>
                                <span className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#60A5FA]"></div>
                                    SAVINGS
                                </span>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={timeSeriesData}>
                                <defs>
                                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6EE7B7" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#6EE7B7" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#F87171" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#F87171" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#60A5FA" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                                <XAxis dataKey="date" stroke="#6B7280" style={{ fontSize: 11 }} />
                                <YAxis stroke="#6B7280" style={{ fontSize: 11 }} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#1F2937',
                                        border: '1px solid #374151',
                                        borderRadius: '8px',
                                        fontSize: '12px'
                                    }}
                                />
                                <Area type="monotone" dataKey="income" stroke="#6EE7B7" strokeWidth={2} fillOpacity={1} fill="url(#colorIncome)" />
                                <Area type="monotone" dataKey="expenses" stroke="#F87171" strokeWidth={2} fillOpacity={1} fill="url(#colorExpenses)" />
                                <Area type="monotone" dataKey="savings" stroke="#60A5FA" strokeWidth={2} fillOpacity={1} fill="url(#colorSavings)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </motion.div>

                    {/* Category Breakdown */}
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        className="col-span-4 bg-[#1F2937] border border-[#374151] rounded-xl p-6"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-[#A78BFA]/10 rounded-lg flex items-center justify-center">
                                <BarChart3 className="w-5 h-5 text-[#A78BFA]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#E5E7EB]">SPENDING BY CATEGORY</h3>
                                <p className="text-xs text-[#6B7280]">Distribution analysis</p>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={categoryAnalysis}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={2}
                                    dataKey="amount"
                                    label={false}
                                >
                                    {categoryAnalysis.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#1F2937',
                                        border: '1px solid #374151',
                                        borderRadius: '8px',
                                        fontSize: '11px'
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="mt-4 space-y-2 max-h-[100px] overflow-y-auto">
                            {categoryAnalysis.slice(0, 5).map((cat, index) => (
                                <div key={cat.category} className="flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                                        <span className="text-[#9CA3AF]">{cat.category}</span>
                                    </div>
                                    <span className="text-[#E5E7EB] font-mono">${cat.amount}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Budget Progress */}
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="col-span-6 bg-[#1F2937] border border-[#374151] rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#60A5FA]/10 rounded-lg flex items-center justify-center">
                                    <Target className="w-5 h-5 text-[#60A5FA]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#E5E7EB]">BUDGET HEALTH</h3>
                                    <p className="text-xs text-[#6B7280]">Category allocation</p>
                                </div>
                            </div>
                            <span className="text-2xl font-bold text-[#6EE7B7]">{stats.budgetHealth}%</span>
                        </div>
                        <div className="space-y-4">
                            {budgets.map((budget, index) => {
                                const percentage = (budget.spent / budget.allocated) * 100;
                                const isOverBudget = percentage > 100;
                                return (
                                    <div key={budget.category}>
                                        <div className="flex justify-between text-xs mb-2">
                                            <span className="text-[#9CA3AF] font-mono">{budget.category}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[#E5E7EB] font-mono">${budget.spent}/${budget.allocated}</span>
                                                <span className={`${isOverBudget ? 'text-[#F87171]' : 'text-[#6EE7B7]'} text-xs`}>
                                                    {percentage.toFixed(0)}%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="w-full bg-[#374151] rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${Math.min(percentage, 100)}%` }}
                                                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                                                className="h-2 rounded-full transition-all"
                                                style={{
                                                    backgroundColor: isOverBudget ? '#F87171' : budget.color
                                                }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Monthly Comparison */}
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.45 }}
                        className="col-span-6 bg-[#1F2937] border border-[#374151] rounded-xl p-6"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-[#10B981]/10 rounded-lg flex items-center justify-center">
                                <BarChart3 className="w-5 h-5 text-[#10B981]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#E5E7EB]">MONTHLY TREND</h3>
                                <p className="text-xs text-[#6B7280]">5-month comparison</p>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={monthlyComparison}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                                <XAxis dataKey="month" stroke="#6B7280" style={{ fontSize: 10 }} />
                                <YAxis stroke="#6B7280" style={{ fontSize: 10 }} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#1F2937',
                                        border: '1px solid #374151',
                                        borderRadius: '8px',
                                        fontSize: '11px'
                                    }}
                                />
                                <Bar dataKey="savings" fill="#10B981" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </motion.div>

                    {/* Goals Tracking */}
                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="col-span-12 bg-[#1F2937] border border-[#374151] rounded-xl p-6"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center">
                                <Target className="w-5 h-5 text-[#F59E0B]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#E5E7EB]">FINANCIAL GOALS</h3>
                                <p className="text-xs text-[#6B7280]">Progress tracking</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                            {goals.map((goal, index) => (
                                <div key={goal.id} className="bg-[#111827] border border-[#374151] rounded-lg p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-lg font-bold text-[#E5E7EB]">{goal.name}</span>
                                        <span className="text-xs text-[#6B7280] font-mono">{goal.deadline}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm mb-3">
                                        <span className="text-[#9CA3AF]">${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}</span>
                                        <span className="text-[#6EE7B7] font-bold">{goal.progress.toFixed(0)}%</span>
                                    </div>
                                    <div className="w-full bg-[#374151] rounded-full h-3">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${goal.progress}%` }}
                                            transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                            className="h-3 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#F97316]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
