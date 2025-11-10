import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { features } from '../data/dashboardData';

export default function DashboardMainFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {features.map(
        ({ title, value, percent, trend, color, icon: Icon }, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-4 rounded-xl border border-gray-600/30 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{title}</p>
                <p className="text-2xl font-bold text-white">{value}</p>
                <div
                  className={`flex items-center ${
                    trend === 'up' ? 'text-green-400' : 'text-red-400'
                  } text-sm mt-1`}
                >
                  {trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  <span>{percent}</span>
                </div>
              </div>
              <div className={`p-3 rounded-xl bg-${color}-500/20`}>
                <Icon className={`w-6 h-6 text-${color}-400`} />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
