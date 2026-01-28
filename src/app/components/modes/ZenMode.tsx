import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Heart, Smile } from 'lucide-react';
import { stats, insights, timeSeriesData, goals } from '@/app/data/mockData';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

export function ZenMode() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex flex-col items-center justify-center px-8 py-20"
    >
      <div className="max-w-[700px] w-full space-y-16">
        {/* Breathing Guide */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center shadow-xl"
          >
            <Heart className="w-12 h-12 text-purple-400" />
          </motion.div>
          <h1 className="text-4xl text-gray-700 mb-4" style={{ fontWeight: 400 }}>
            Breathe. You're doing fine.
          </h1>
          <p className="text-xl text-gray-500" style={{ lineHeight: 1.8 }}>
            Everything is under control
          </p>
        </motion.div>

        {/* Single Hero Metric */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white/60 backdrop-blur-md rounded-[2rem] p-16 text-center border border-white/80 shadow-2xl"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <TrendingUp className="w-10 h-10 text-emerald-400" />
            <p className="text-xl text-gray-500">Your Balance</p>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-8xl text-gray-800 mb-4"
            style={{ fontWeight: 300 }}
          >
            ${stats.totalSavings.toLocaleString()}
          </motion.div>
          <p className="text-2xl text-emerald-400 mb-8">You're {stats.savingsRate}% on track</p>
          
          {/* Simple Goal Preview */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Smile className="w-6 h-6 text-purple-400" />
              <p className="text-sm text-gray-500">Next Goal: {goals[0].name}</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div 
                className="h-3 rounded-full bg-gradient-to-r from-purple-300 to-pink-300"
                style={{ width: `${goals[0].progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">${goals[0].current.toLocaleString()} of ${goals[0].target.toLocaleString()}</p>
          </div>
        </motion.div>

        {/* Gentle Insight */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 border border-white/80 shadow-lg"
        >
          <div className="flex items-start gap-5">
            <span className="text-5xl">{insights[0].icon}</span>
            <div>
              <p className="text-xl text-gray-700 mb-2" style={{ lineHeight: 1.8 }}>
                {insights[0].message}
              </p>
              <p className="text-sm text-gray-500">Keep up the great work!</p>
            </div>
          </div>
        </motion.div>

        {/* Minimal Sparkline */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/80 shadow-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <p className="text-lg text-gray-600">Your Progress Journey</p>
          </div>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={timeSeriesData}>
              <Line 
                type="monotone" 
                dataKey="savings" 
                stroke="#A78BFA" 
                strokeWidth={4}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Soft Call to Action */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-purple-200 to-pink-200 text-purple-700 rounded-3xl py-8 text-2xl shadow-lg hover:shadow-xl transition-all"
        >
          Take a moment to reflect
        </motion.button>
      </div>
    </motion.div>
  );
}