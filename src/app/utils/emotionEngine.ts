// Emotion detection engine - converts user input to emotional state
export type VibeMode = 'zen' | 'beast' | 'quick' | 'professional';

export interface EmotionalState {
  stress: number; // 0-10
  focus: number; // 0-10
  urgency: number; // 0-10
  professional: number; // 0-10
  cognitiveLoad: 'minimal' | 'moderate' | 'high' | 'maximum';
  suggestedMode: VibeMode;
}

// Keyword patterns for emotion detection
const stressKeywords = [
  'stressed', 'overwhelmed', 'anxious', 'worried', 'panicking', 'scared',
  'help', 'too much', 'can\'t handle', 'confused', 'lost', 'drowning',
  'tired', 'exhausted', 'burned out', 'crazy', 'insane'
];

const focusKeywords = [
  'analyze', 'data', 'detail', 'everything', 'all', 'show me',
  'deep dive', 'breakdown', 'statistics', 'metrics', 'numbers',
  'compare', 'chart', 'graph', 'report', 'full', 'complete'
];

const urgencyKeywords = [
  'quick', 'fast', 'hurry', 'now', 'asap', 'urgent', 'immediately',
  'just', 'only', 'simple', 'add', 'mobile', 'on the go', 'rushing'
];

const professionalKeywords = [
  'present', 'share', 'meeting', 'client', 'boss', 'report',
  'export', 'print', 'clean', 'professional', 'boardroom', 'presentation'
];

// Calming phrases detection
const calmingPhrases = [
  'breathe', 'ok', 'okay', 'fine', 'good', 'relax', 'peace', 'calm'
];

export function analyzeEmotion(input: string): EmotionalState {
  const lowerInput = input.toLowerCase();
  
  // Calculate scores based on keyword matches
  let stress = 0;
  let focus = 0;
  let urgency = 0;
  let professional = 0;

  // Stress detection
  stressKeywords.forEach(keyword => {
    if (lowerInput.includes(keyword)) {
      stress += 2;
    }
  });

  // Focus detection
  focusKeywords.forEach(keyword => {
    if (lowerInput.includes(keyword)) {
      focus += 2;
    }
  });

  // Urgency detection
  urgencyKeywords.forEach(keyword => {
    if (lowerInput.includes(keyword)) {
      urgency += 2;
    }
  });

  // Professional context detection
  professionalKeywords.forEach(keyword => {
    if (lowerInput.includes(keyword)) {
      professional += 2;
    }
  });

  // Calming phrase reduces stress
  calmingPhrases.forEach(phrase => {
    if (lowerInput.includes(phrase)) {
      stress = Math.max(0, stress - 1);
    }
  });

  // Normalize scores to 0-10
  stress = Math.min(10, stress);
  focus = Math.min(10, focus);
  urgency = Math.min(10, urgency);
  professional = Math.min(10, professional);

  // Determine cognitive load
  let cognitiveLoad: 'minimal' | 'moderate' | 'high' | 'maximum' = 'moderate';
  if (stress >= 7) cognitiveLoad = 'minimal';
  else if (focus >= 7) cognitiveLoad = 'maximum';
  else if (urgency >= 7) cognitiveLoad = 'moderate';
  else if (professional >= 7) cognitiveLoad = 'high';

  // Determine suggested mode based on dominant emotion
  let suggestedMode: VibeMode = 'beast';
  
  if (stress >= 6) {
    suggestedMode = 'zen';
  } else if (professional >= 6) {
    suggestedMode = 'professional';
  } else if (urgency >= 6) {
    suggestedMode = 'quick';
  } else if (focus >= 4 || lowerInput.includes('beast')) {
    suggestedMode = 'beast';
  }

  return {
    stress,
    focus,
    urgency,
    professional,
    cognitiveLoad,
    suggestedMode,
  };
}

// Example inputs and their expected outputs
export const exampleInputs = [
  {
    input: "I'm so stressed about money, just tell me if I'm okay",
    expected: 'zen'
  },
  {
    input: "Show me all the data, I need to analyze everything",
    expected: 'beast'
  },
  {
    input: "Quick, add coffee expense, I'm rushing",
    expected: 'quick'
  },
  {
    input: "Prepare this for client meeting tomorrow",
    expected: 'professional'
  },
];
