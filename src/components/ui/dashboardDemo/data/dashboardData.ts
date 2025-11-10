import { TrendingUp, DollarSign, CreditCard, Wallet } from 'lucide-react';

export const monthlyData = [
  { month: 'Ene', ingresos: 4500, gastos: 3200 },
  { month: 'Feb', ingresos: 3800, gastos: 2900 },
  { month: 'Mar', ingresos: 5200, gastos: 3800 },
  { month: 'Abr', ingresos: 4100, gastos: 3500 },
  { month: 'May', ingresos: 4800, gastos: 3100 },
  { month: 'Jun', ingresos: 5500, gastos: 4200 },
];

export const balanceData = [
  { date: '1', balance: 15000 },
  { date: '7', balance: 16200 },
  { date: '14', balance: 15800 },
  { date: '21', balance: 17400 },
  { date: '28', balance: 18900 },
];

export const expenseCategories = [
  { name: 'Alimentación', value: 35, color: '#3B82F6' },
  { name: 'Transporte', value: 20, color: '#10B981' },
  { name: 'Entretenimiento', value: 15, color: '#F59E0B' },
  { name: 'Servicios', value: 20, color: '#EF4444' },
  { name: 'Otros', value: 10, color: '#8B5CF6' },
];

export const transactions = [
  {
    id: 1,
    type: 'income',
    description: 'Salario',
    amount: 3500,
    date: '15 Jun',
  },
  {
    id: 2,
    type: 'expense',
    description: 'Supermercado',
    amount: -120,
    date: '14 Jun',
  },
  {
    id: 3,
    type: 'income',
    description: 'Freelance',
    amount: 800,
    date: '13 Jun',
  },
  {
    id: 4,
    type: 'expense',
    description: 'Netflix',
    amount: -15,
    date: '12 Jun',
  },
  {
    id: 5,
    type: 'expense',
    description: 'Gasolina',
    amount: -65,
    date: '11 Jun',
  },
];

export const features = [
  {
    title: 'Balance Total',
    value: '€18,900',
    percent: '+8.2%',
    trend: 'up',
    color: 'blue',
    icon: Wallet,
  },
  {
    title: 'Ingresos',
    value: '€5,500',
    percent: '+12.3%',
    trend: 'up',
    color: 'green',
    icon: DollarSign,
  },
  {
    title: 'Gastos',
    value: '€4,200',
    percent: '+5.1%',
    trend: 'down',
    color: 'red',
    icon: CreditCard,
  },
  {
    title: 'Ahorro',
    value: '€1,300',
    percent: '+18.7%',
    trend: 'up',
    color: 'purple',
    icon: TrendingUp,
  },
];
