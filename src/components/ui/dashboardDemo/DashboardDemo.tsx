import DashboardHeader from './ui/DashboardHeader';
import DashboardMainFeatures from './ui/DashboardMainFeatures';
import DashboardBarChart from './ui/charts/DashboardBarChart';
import DashboardLineChart from './ui/charts/DashboardLineChart';
import DashboardPieChart from './ui/charts/DashboardPieChart';
import DashboardTransactions from './ui/DashboardTransactions';

export default function DashboardDemo() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700/50 shadow-2xl backdrop-blur-xl">
      {/* Header del dashboard */}
      <DashboardHeader />

      {/* Métricas principales */}
      <DashboardMainFeatures />

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Gráfico de barras - Ingresos vs Gastos */}
        <DashboardBarChart />
        {/* Gráfico de línea - Evolución del balance */}
        <DashboardLineChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Distribución de gastos */}
        <DashboardPieChart />

        {/* Transacciones recientes */}
        <DashboardTransactions />
      </div>
    </div>
  );
}
