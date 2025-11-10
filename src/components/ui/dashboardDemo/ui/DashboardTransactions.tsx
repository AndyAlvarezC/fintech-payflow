import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { transactions } from '../data/dashboardData';

export default function DashboardTransactions() {
  return (
    <div className="lg:col-span-2 bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-600/30 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white mb-4">
        Transacciones Recientes
      </h3>
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg border border-gray-600/20"
          >
            <div className="flex items-center">
              <div
                className={`p-2 rounded-lg mr-3 ${
                  transaction.type === 'income'
                    ? 'bg-green-500/20'
                    : 'bg-red-500/20'
                }`}
              >
                {transaction.type === 'income' ? (
                  <ArrowUpRight className="w-4 h-4 text-green-400" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-400" />
                )}
              </div>
              <div>
                <p className="text-white font-medium">
                  {transaction.description}
                </p>
                <p className="text-gray-400 text-sm">{transaction.date}</p>
              </div>
            </div>
            <span
              className={`font-semibold ${
                transaction.type === 'income'
                  ? 'text-green-400'
                  : 'text-red-400'
              }`}
            >
              {transaction.amount > 0 ? '+' : ''}€
              {Math.abs(transaction.amount).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
