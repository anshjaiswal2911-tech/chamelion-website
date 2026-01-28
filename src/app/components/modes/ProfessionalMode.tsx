import { motion } from 'motion/react';
import { Share2, Download, FileText, TrendingUp, Target, Award } from 'lucide-react';
import { stats, budgets, timeSeriesData, goals, categoryAnalysis, monthlyComparison } from '@/app/data/mockData';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export function ProfessionalMode() {
  const COLORS = ['#8B5CF6', '#10B981', '#F59E0B', '#EC4899', '#3B82F6', '#EF4444', '#A78BFA'];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white text-gray-900 px-12 py-10"
    >
      {/* Header */}
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-10 pb-8 border-b-2 border-gray-200">
          <div>
            <h1 className="text-4xl font-serif mb-3">Financial Overview Report</h1>
            <p className="text-lg text-gray-600">Q1 2026 Performance Analysis • January 28, 2026</p>
          </div>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white border-2 border-gray-300 rounded-lg flex items-center gap-2 hover:border-gray-400 transition-colors shadow-sm"
            >
              <Share2 className="w-5 h-5" />
              <span className="font-medium">Share</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-md"
            >
              <Download className="w-5 h-5" />
              <span className="font-medium">Export PDF</span>
            </motion.button>
          </div>
        </div>

        {/* Executive Summary */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 mb-10 border border-blue-100 shadow-lg"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-semibold">Executive Summary</h2>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="text-sm text-gray-600 mb-2 uppercase tracking-wide">Total Income</div>
              <div className="text-4xl font-bold text-blue-600 mb-2">${stats.totalIncome.toLocaleString()}</div>
              <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                <TrendingUp className="w-4 h-4" />
                <span>+12.5% vs. last period</span>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2 uppercase tracking-wide">Total Expenses</div>
              <div className="text-4xl font-bold text-gray-800 mb-2">${stats.totalExpenses.toLocaleString()}</div>
              <div className="flex items-center gap-1 text-sm text-red-600 font-medium">
                <TrendingUp className="w-4 h-4" />
                <span>+5.2% vs. last period</span>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2 uppercase tracking-wide">Net Savings</div>
              <div className="text-4xl font-bold text-green-600 mb-2">${stats.totalSavings.toLocaleString()}</div>
              <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                <TrendingUp className="w-4 h-4" />
                <span>+18.3% vs. last period</span>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2 uppercase tracking-wide">Savings Rate</div>
              <div className="text-4xl font-bold text-purple-600 mb-2">{stats.savingsRate}%</div>
              <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                <TrendingUp className="w-4 h-4" />
                <span>+3.1% vs. target</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-10 mb-10">
          {/* Performance Chart */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-md"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Performance Trend</h3>
                <p className="text-sm text-gray-600">6-month trajectory analysis</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" style={{ fontSize: 13 }} />
                <YAxis stroke="#6b7280" style={{ fontSize: 13 }} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    padding: '12px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#2563eb" 
                  strokeWidth={3}
                  dot={{ fill: '#2563eb', r: 5 }}
                  name="Income"
                />
                <Line 
                  type="monotone" 
                  dataKey="savings" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', r: 5 }}
                  name="Savings"
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Budget Allocation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-md"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Budget Allocation</h3>
                <p className="text-sm text-gray-600">Category-wise breakdown</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={budgets}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="category" stroke="#6b7280" style={{ fontSize: 12 }} angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#6b7280" style={{ fontSize: 13 }} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    padding: '12px'
                  }}
                />
                <Bar dataKey="allocated" fill="#93c5fd" name="Allocated" radius={[8, 8, 0, 0]} />
                <Bar dataKey="spent" name="Spent" radius={[8, 8, 0, 0]}>
                  {budgets.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Goals Progress */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-10 shadow-md"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Financial Goals Progress</h3>
              <p className="text-sm text-gray-600">Target achievement tracking</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <div key={goal.id} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">{goal.name}</h4>
                  <span className="text-2xl font-bold text-blue-600">{goal.progress.toFixed(0)}%</span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>${goal.current.toLocaleString()}</span>
                    <span>${goal.target.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${goal.progress}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500">Target: {goal.deadline}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-10 shadow-md"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Key Performance Insights</h3>
              <p className="text-sm text-gray-600">Strategic financial highlights</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
              <div className="text-3xl mb-3">✓</div>
              <div className="font-semibold text-lg mb-2">Strong Performance</div>
              <div className="text-sm text-gray-600 leading-relaxed">
                Savings rate of {stats.savingsRate}% exceeds target by 10 percentage points, demonstrating excellent financial discipline.
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6">
              <div className="text-3xl mb-3">📊</div>
              <div className="font-semibold text-lg mb-2">Budget Adherence</div>
              <div className="text-sm text-gray-600 leading-relaxed">
                Operating 15% under allocated budget across all categories with consistent spending patterns.
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6">
              <div className="text-3xl mb-3">📈</div>
              <div className="font-semibold text-lg mb-2">Growth Trajectory</div>
              <div className="text-sm text-gray-600 leading-relaxed">
                Month-over-month savings increased by $753, showing positive momentum and sustainable growth.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-8 border-t-2 border-gray-200 text-center text-sm text-gray-500 space-y-2"
        >
          <p className="font-medium">Generated on January 28, 2026 • Confidential • For Internal Use Only</p>
          <p>This report contains sensitive financial information. Do not distribute without proper authorization.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}