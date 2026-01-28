import { motion } from 'motion/react';
import { Home, BarChart3, Layout, Sparkles } from 'lucide-react';

interface NavbarProps {
    currentPage: 'landing' | 'dashboard' | 'analytics';
    onNavigate: (page: 'landing' | 'dashboard' | 'analytics') => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
    const navItems = [
        { id: 'landing' as const, label: 'Home', icon: Home },
        { id: 'dashboard' as const, label: 'Dashboard', icon: Layout },
        { id: 'analytics' as const, label: 'Analytics', icon: BarChart3 },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => onNavigate('landing')}
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">VibeFinance</h1>
                            <p className="text-xs text-gray-400">Emotionally Intelligent</p>
                        </div>
                    </motion.div>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = currentPage === item.id;

                            return (
                                <motion.button
                                    key={item.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => onNavigate(item.id)}
                                    className={`px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all font-medium ${isActive
                                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                                            : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {item.label}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
