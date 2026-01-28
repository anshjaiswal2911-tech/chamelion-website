import { motion } from 'motion/react';
import { Plus, DollarSign, Coffee, ShoppingBag, Car, Home, Zap, Check, Mic, TrendingUp } from 'lucide-react';
import { transactions, stats } from '@/app/data/mockData';
import { useState } from 'react';

export function QuickMode() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const quickCategories = [
    { icon: Coffee, label: 'Food', color: 'bg-amber-500' },
    { icon: ShoppingBag, label: 'Shopping', color: 'bg-pink-500' },
    { icon: Car, label: 'Transport', color: 'bg-blue-500' },
    { icon: Home, label: 'Bills', color: 'bg-purple-500' },
  ];

  const handleQuickAdd = (category: string) => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setAmount('');
      setDescription('');
    }, 2000);
  };

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white pb-safe"
    >
      {/* Header */}
      <div className="p-6 pb-4 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Zap className="w-7 h-7 text-black" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Quick Action</h1>
              <p className="text-xs text-gray-400">Fast expense tracking</p>
            </div>
          </div>
          <button className="w-11 h-11 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-2xl transition-colors">
            ×
          </button>
        </div>
      </div>

      {/* Quick Input Card */}
      <div className="px-6 pb-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl"
        >
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <DollarSign className="w-8 h-8 text-white" />
              <input
                type="number"
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent text-center text-6xl font-bold outline-none w-full text-white placeholder-white/50"
                autoFocus
              />
            </div>
          </div>
          
          <div className="relative mb-5">
            <input
              type="text"
              placeholder="What did you spend on?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-white/20 backdrop-blur rounded-2xl px-6 py-5 text-white placeholder-white/60 outline-none text-lg"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors">
              <Mic className="w-5 h-5" />
            </button>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className="w-full bg-white text-purple-600 rounded-2xl py-6 text-xl font-bold shadow-xl hover:shadow-2xl transition-all"
            onClick={() => handleQuickAdd('Quick')}
            disabled={!amount || !description}
          >
            <span className="flex items-center justify-center gap-2">
              <Plus className="w-6 h-6" />
              Add Expense
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Category Chips */}
      <div className="px-6 pb-6">
        <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide flex items-center gap-2">
          <Zap className="w-4 h-4" />
          Quick Categories
        </h3>
        <div className="grid grid-cols-4 gap-3">
          {quickCategories.map((cat, index) => (
            <motion.button
              key={cat.label}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-3 p-5 bg-gray-800/80 backdrop-blur rounded-2xl hover:bg-gray-700 transition-all border border-gray-700"
              onClick={() => handleQuickAdd(cat.label)}
            >
              <div className={`${cat.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg`}>
                <cat.icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-medium">{cat.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 pb-6">
        <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Today's Overview
        </h3>
        <div className="grid grid-cols-3 gap-3">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-5 text-center shadow-lg"
          >
            <div className="text-3xl font-bold mb-1">${(stats.totalSavings / 1000).toFixed(1)}K</div>
            <div className="text-xs opacity-90">Saved</div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl p-5 text-center shadow-lg"
          >
            <div className="text-3xl font-bold mb-1">${(stats.totalExpenses / 1000).toFixed(1)}K</div>
            <div className="text-xs opacity-90">Spent</div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-5 text-center shadow-lg"
          >
            <div className="text-3xl font-bold mb-1">{stats.savingsRate}%</div>
            <div className="text-xs opacity-90">Rate</div>
          </motion.div>
        </div>
      </div>

      {/* Recent Items */}
      <div className="px-6 pb-8">
        <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">Recent Activity</h3>
        <div className="space-y-3">
          {transactions.slice(0, 5).map((tx, index) => (
            <motion.div
              key={tx.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              className="bg-gray-800/80 backdrop-blur rounded-2xl p-5 flex items-center justify-between border border-gray-700"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl ${tx.amount > 0 ? 'bg-green-500' : 'bg-red-500'} bg-opacity-20 flex items-center justify-center`}>
                  <DollarSign className={`w-6 h-6 ${tx.amount > 0 ? 'text-green-400' : 'text-red-400'}`} />
                </div>
                <div>
                  <div className="font-semibold text-base">{tx.description}</div>
                  <div className="text-xs text-gray-400 flex items-center gap-2">
                    <span>{tx.category}</span>
                    <span>•</span>
                    <span>{tx.date.slice(5)}</span>
                  </div>
                </div>
              </div>
              <div className={`text-xl font-bold ${tx.amount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Toast */}
      {showSuccess && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-5 rounded-3xl shadow-2xl flex items-center gap-3 z-50"
        >
          <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
            <Check className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg">Added successfully!</span>
        </motion.div>
      )}
    </motion.div>
  );
}