import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { EmotionDetector } from '@/app/components/EmotionDetector';
import { ZenMode } from '@/app/components/modes/ZenMode';
import { BeastMode } from '@/app/components/modes/BeastMode';
import { QuickMode } from '@/app/components/modes/QuickMode';
import { ProfessionalMode } from '@/app/components/modes/ProfessionalMode';
import type { VibeMode, EmotionalState } from '@/app/utils/emotionEngine';
import { Toaster, toast } from 'sonner';

export function DashboardPage() {
    const [currentMode, setCurrentMode] = useState<VibeMode>('beast');
    const [emotionalState, setEmotionalState] = useState<EmotionalState | null>(null);
    const [showTransition, setShowTransition] = useState(false);

    const handleModeChange = (mode: VibeMode, state: EmotionalState) => {
        if (mode === currentMode) return;

        setShowTransition(true);
        setEmotionalState(state);

        // Show toast notification
        const modeMessages = {
            zen: '🧘 Switching to Zen Mode - Let\'s calm down',
            beast: '⚡ Beast Mode Activated - Full power!',
            quick: '⚡ Quick Mode Ready - Lightning fast',
            professional: '💼 Professional Mode - Clean & presentable'
        };

        toast.success(modeMessages[mode], {
            duration: 2000,
        });

        // Transition animation
        setTimeout(() => {
            setCurrentMode(mode);
            setShowTransition(false);
        }, 400);
    };

    const renderMode = () => {
        switch (currentMode) {
            case 'zen':
                return <ZenMode />;
            case 'beast':
                return <BeastMode />;
            case 'quick':
                return <QuickMode />;
            case 'professional':
                return <ProfessionalMode />;
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Emotion Detector Input */}
            <EmotionDetector onModeChange={handleModeChange} currentMode={currentMode} />

            {/* Transition Overlay */}
            <AnimatePresence>
                {showTransition && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-lg flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-center"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="w-16 h-16 mx-auto mb-4 border-4 border-purple-500 border-t-transparent rounded-full"
                            />
                            <div className="text-white text-xl font-bold">
                                Adapting interface...
                            </div>
                            {emotionalState && (
                                <div className="text-white/60 text-sm mt-2">
                                    Stress: {emotionalState.stress}/10 • Focus: {emotionalState.focus}/10
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mode Content */}
            <div className="pt-[350px]">
                <AnimatePresence mode="wait">
                    <motion.div key={currentMode}>
                        {renderMode()}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Toast Notifications */}
            <Toaster
                position="bottom-center"
                theme="dark"
                richColors
            />

            {/* Keyboard Shortcut Hint */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="fixed bottom-6 right-6 bg-black/80 backdrop-blur text-white px-4 py-2 rounded-lg text-xs border border-white/20 z-50"
            >
                💡 <span className="font-bold">Pro tip:</span> Try different emotional phrases to see the magic!
            </motion.div>
        </div>
    );
}
