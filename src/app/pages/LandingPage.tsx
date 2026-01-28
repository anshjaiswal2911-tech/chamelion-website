import { motion } from 'motion/react';
import { ArrowRight, Sparkles, TrendingUp, Brain, Shield, Zap, BarChart3, Target } from 'lucide-react';
import heroImage from '@/assets/hero-image.png';

interface LandingPageProps {
    onNavigate: (page: 'dashboard' | 'analytics') => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
    const features = [
        {
            icon: Brain,
            title: 'AI-Powered Insights',
            description: 'Smart financial analysis that adapts to your emotional state',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: TrendingUp,
            title: 'Real-Time Analytics',
            description: 'Track your finances with live updates and predictive trends',
            color: 'from-emerald-500 to-teal-500'
        },
        {
            icon: Zap,
            title: 'Emotion Detection',
            description: 'Interface adapts based on how you\'re feeling right now',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: Shield,
            title: 'Smart Budgeting',
            description: 'Intelligent budget tracking with personalized recommendations',
            color: 'from-blue-500 to-indigo-500'
        }
    ];

    const stats = [
        { value: '68%', label: 'Avg Savings Rate' },
        { value: '$4.7K', label: 'Monthly Savings' },
        { value: '15+', label: 'Smart Insights' },
        { value: '99%', label: 'Budget Accuracy' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0B0F14] via-[#1a1f2e] to-[#0B0F14] text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 20, repeat: Infinity }}
                        className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            rotate: [90, 0, 90],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-sm text-purple-300">Emotionally Intelligent Finance</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        >
                            Your Money,
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                Your Mood
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-gray-400 mb-8 leading-relaxed"
                        >
                            Experience the future of personal finance with AI-powered insights that adapt to your emotional state.
                            Make smarter financial decisions with an interface that understands you.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onNavigate('dashboard')}
                                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg flex items-center gap-2 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
                            >
                                Get Started
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onNavigate('analytics')}
                                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-white/10 transition-all backdrop-blur"
                            >
                                <BarChart3 className="w-5 h-5" />
                                View Analytics
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/10"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30" />
                            <img
                                src={heroImage}
                                alt="Financial Dashboard"
                                className="relative rounded-3xl shadow-2xl border border-white/10"
                            />
                        </motion.div>

                        {/* Floating Cards */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-4 shadow-2xl"
                        >
                            <div className="flex items-center gap-3">
                                <TrendingUp className="w-8 h-8 text-white" />
                                <div>
                                    <div className="text-2xl font-bold text-white">+18.3%</div>
                                    <div className="text-xs text-white/80">Savings Growth</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 shadow-2xl"
                        >
                            <div className="flex items-center gap-3">
                                <Target className="w-8 h-8 text-white" />
                                <div>
                                    <div className="text-2xl font-bold text-white">85%</div>
                                    <div className="text-xs text-white/80">Budget Health</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold mb-4">
                            Why Choose{' '}
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                VibeFinance
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400">
                            Intelligent features designed for the modern financial mind
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    whileHover={{ y: -10 }}
                                    className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
                                >
                                    <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-3xl p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl" />
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold mb-4">
                            Ready to Transform Your Financial Life?
                        </h2>
                        <p className="text-xl text-gray-400 mb-8">
                            Join thousands who are already managing their money smarter
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onNavigate('dashboard')}
                            className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-xl shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
                        >
                            Start Your Journey
                        </motion.button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
