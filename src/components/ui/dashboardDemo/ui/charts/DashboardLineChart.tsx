import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

import { balanceData } from '../../data/dashboardData';
export default function DashboardLineChart() {
  return (
    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-gray-600/30 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white mb-4">
        Evolución del Balance
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={balanceData}>
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            className="text-gray-400"
          />
          <YAxis axisLine={false} tickLine={false} className="text-gray-400" />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
