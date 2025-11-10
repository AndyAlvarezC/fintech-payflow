import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { expenseCategories } from '../../data/dashboardData';

export default function DashboardPieChart() {
  return (
    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-600/30 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white mb-4">
        Distribución de Gastos
      </h3>
      <div className="flex justify-center mb-4">
        <ResponsiveContainer width={150} height={150}>
          <PieChart>
            <Pie
              data={expenseCategories}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              dataKey="value"
              stroke="none"
            >
              {expenseCategories.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-2">
        {expenseCategories.map((category, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className="w-3 h-3 rounded mr-3"
                style={{ backgroundColor: category.color }}
              ></div>
              <span className="text-sm text-gray-300">{category.name}</span>
            </div>
            <span className="text-sm text-white font-medium">
              {category.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
