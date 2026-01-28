// Mock financial data for the dashboard
export interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  type: 'income' | 'expense';
}

export interface Budget {
  category: string;
  allocated: number;
  spent: number;
  color: string;
}

export interface TimeSeriesData {
  date: string;
  income: number;
  expenses: number;
  savings: number;
}

export const transactions: Transaction[] = [
  { id: '1', description: 'Salary', amount: 5000, category: 'Income', date: '2026-01-25', type: 'income' },
  { id: '2', description: 'Rent', amount: -1500, category: 'Housing', date: '2026-01-24', type: 'expense' },
  { id: '3', description: 'Groceries', amount: -230, category: 'Food', date: '2026-01-23', type: 'expense' },
  { id: '4', description: 'Coffee Shop', amount: -12, category: 'Food', date: '2026-01-22', type: 'expense' },
  { id: '5', description: 'Uber', amount: -25, category: 'Transport', date: '2026-01-22', type: 'expense' },
  { id: '6', description: 'Netflix', amount: -15, category: 'Entertainment', date: '2026-01-21', type: 'expense' },
  { id: '7', description: 'Gym Membership', amount: -50, category: 'Health', date: '2026-01-20', type: 'expense' },
  { id: '8', description: 'Freelance Project', amount: 800, category: 'Income', date: '2026-01-19', type: 'income' },
  { id: '9', description: 'Electricity Bill', amount: -120, category: 'Utilities', date: '2026-01-18', type: 'expense' },
  { id: '10', description: 'Restaurant', amount: -85, category: 'Food', date: '2026-01-17', type: 'expense' },
  { id: '11', description: 'Gas', amount: -45, category: 'Transport', date: '2026-01-16', type: 'expense' },
  { id: '12', description: 'Amazon', amount: -120, category: 'Shopping', date: '2026-01-15', type: 'expense' },
  { id: '13', description: 'Spotify', amount: -10, category: 'Entertainment', date: '2026-01-14', type: 'expense' },
  { id: '14', description: 'Consulting', amount: 1200, category: 'Income', date: '2026-01-13', type: 'income' },
  { id: '15', description: 'Pharmacy', amount: -35, category: 'Health', date: '2026-01-12', type: 'expense' },
];

export const budgets: Budget[] = [
  { category: 'Housing', allocated: 1500, spent: 1500, color: '#8B5CF6' },
  { category: 'Food', allocated: 500, spent: 327, color: '#10B981' },
  { category: 'Transport', allocated: 200, spent: 70, color: '#F59E0B' },
  { category: 'Entertainment', allocated: 150, spent: 25, color: '#EC4899' },
  { category: 'Health', allocated: 100, spent: 85, color: '#3B82F6' },
  { category: 'Utilities', allocated: 150, spent: 120, color: '#EF4444' },
  { category: 'Shopping', allocated: 300, spent: 120, color: '#A78BFA' },
];

export const timeSeriesData: TimeSeriesData[] = [
  { date: 'Jan 1', income: 5000, expenses: 2100, savings: 2900 },
  { date: 'Jan 5', income: 5200, expenses: 2300, savings: 2900 },
  { date: 'Jan 10', income: 5800, expenses: 2150, savings: 3650 },
  { date: 'Jan 15', income: 6200, expenses: 2400, savings: 3800 },
  { date: 'Jan 20', income: 6500, expenses: 2600, savings: 3900 },
  { date: 'Jan 25', income: 7000, expenses: 2247, savings: 4753 },
];

export const stats = {
  totalIncome: 7000,
  totalExpenses: 2247,
  totalSavings: 4753,
  savingsRate: 68,
  budgetHealth: 85,
  topSpendingCategory: 'Housing',
  recentTransactions: 15,
  avgDailySpending: 89.88,
  predictedMonthEnd: 5200,
};

export const insights = [
  { 
    type: 'success', 
    message: "You're 15% under budget this month! Keep it up!", 
    icon: '🎉',
    impact: 'high'
  },
  { 
    type: 'warning', 
    message: 'Your food spending is higher than usual', 
    icon: '⚠️',
    impact: 'medium'
  },
  { 
    type: 'info', 
    message: 'You saved $753 more than last month', 
    icon: '💡',
    impact: 'high'
  },
  {
    type: 'tip',
    message: 'You could save $200/month by reducing dining out',
    icon: '💰',
    impact: 'medium'
  }
];

export const categoryAnalysis = [
  { category: 'Housing', percentage: 66.7, amount: 1500, trend: 'stable' },
  { category: 'Food', percentage: 14.6, amount: 327, trend: 'up' },
  { category: 'Transport', percentage: 3.1, amount: 70, trend: 'down' },
  { category: 'Shopping', percentage: 5.3, amount: 120, trend: 'stable' },
  { category: 'Health', percentage: 3.8, amount: 85, trend: 'up' },
  { category: 'Utilities', percentage: 5.3, amount: 120, trend: 'stable' },
  { category: 'Entertainment', percentage: 1.1, amount: 25, trend: 'down' },
];

export const spendingPatterns = {
  peakSpendingDay: 'Friday',
  avgWeekdaySpending: 85,
  avgWeekendSpending: 120,
  mostExpensiveCategory: 'Housing',
  leastExpensiveCategory: 'Entertainment',
};

export const goals = [
  { 
    id: '1',
    name: 'Emergency Fund', 
    target: 10000, 
    current: 4753, 
    deadline: '2026-06-30',
    progress: 47.53
  },
  { 
    id: '2',
    name: 'Vacation', 
    target: 3000, 
    current: 1200, 
    deadline: '2026-08-15',
    progress: 40
  },
  { 
    id: '3',
    name: 'New Laptop', 
    target: 2000, 
    current: 800, 
    deadline: '2026-04-01',
    progress: 40
  },
];

export const monthlyComparison = [
  { month: 'Sep', income: 5200, expenses: 2800, savings: 2400 },
  { month: 'Oct', income: 5400, expenses: 2600, savings: 2800 },
  { month: 'Nov', income: 5800, expenses: 2700, savings: 3100 },
  { month: 'Dec', income: 6200, expenses: 3000, savings: 3200 },
  { month: 'Jan', income: 7000, expenses: 2247, savings: 4753 },
];
