import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';
import { analyzeEmotion, type VibeMode, type EmotionalState } from '@/app/utils/emotionEngine';

interface EmotionDetectorProps {
  onModeChange: (mode: VibeMode, state: EmotionalState) => void;
  currentMode: VibeMode;
}

export function EmotionDetector({ onModeChange, currentMode }: EmotionDetectorProps) {
  const [input, setInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const examplePrompts = [
    "I'm so stressed about money, just tell me if I'm okay",
    "Show me all the data, I need to analyze everything",
    "Quick, add coffee expense",
    "Prepare this for client meeting"
  ];

  const handleAnalyze = () => {
    if (!input.trim()) return;

    setIsAnalyzing(true);

    // Simulate analysis time for dramatic effect
    setTimeout(() => {
      const state = analyzeEmotion(input);
      onModeChange(state.suggestedMode, state);
      setIsAnalyzing(false);
      setInput('');
    }, 800);
  };

  const handleExampleClick = (example: string) => {
    setInput(example);
    setTimeout(() => {
      const state = analyzeEmotion(example);
      onModeChange(state.suggestedMode, state);
    }, 100);
  };

  const getModeColor = () => {
    switch (currentMode) {
      case 'zen': return 'from-purple-500 to-pink-500';
      case 'beast': return 'from-green-500 to-emerald-500';
      case 'quick': return 'from-yellow-500 to-orange-500';
      case 'professional': return 'from-blue-500 to-indigo-500';
    }
  };

  const getModeLabel = () => {
    switch (currentMode) {
      case 'zen': return '🧘 Zen Mode';
      case 'beast': return '⚡ Beast Mode';
      case 'quick': return '⚡ Quick Mode';
      case 'professional': return '💼 Professional Mode';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-xl"
    >
      <div className="max-w-4xl mx-auto p-6">
        {/* Current Mode Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className={`bg-gradient-to-r ${getModeColor()} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg`}>
            {getModeLabel()}
          </div>
        </motion.div>

        {/* Input Area */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Tell me how you're feeling...</h2>
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              placeholder="e.g., I'm stressed and need a quick overview..."
              className="flex-1 bg-white/20 backdrop-blur text-white placeholder-white/50 rounded-xl px-5 py-4 outline-none border border-white/30 focus:border-purple-400 transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAnalyze}
              disabled={isAnalyzing || !input.trim()}
              className={`px-6 py-4 rounded-xl font-bold transition-all flex items-center gap-2 ${
                isAnalyzing || !input.trim()
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg'
              } text-white`}
            >
              {isAnalyzing ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                  Analyzing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Detect
                </>
              )}
            </motion.button>
          </div>

          {/* Example Prompts */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs text-white/60 mr-2">Try:</span>
            {examplePrompts.map((prompt, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleExampleClick(prompt)}
                className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full border border-white/20 transition-colors"
              >
                {prompt.slice(0, 30)}...
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
