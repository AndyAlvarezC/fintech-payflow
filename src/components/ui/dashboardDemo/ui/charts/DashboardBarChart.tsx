import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { monthlyData } from '../../data/dashboardData';

export default function DashboardBarChart() {
  return (
    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-600/30 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white mb-4">
        Ingresos vs Gastos
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={monthlyData}>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            className="text-gray-400"
          />
          <YAxis axisLine={false} tickLine={false} className="text-gray-400" />
          <Bar dataKey="ingresos" fill="#10B981" radius={4} />
          <Bar dataKey="gastos" fill="#EF4444" radius={4} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex justify-center space-x-6 mt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
          <span className="text-sm text-gray-300">Ingresos</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
          <span className="text-sm text-gray-300">Gastos</span>
        </div>
      </div>
    </div>
  );
}
