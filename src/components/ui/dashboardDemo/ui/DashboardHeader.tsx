export default function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
          Dashboard Financiero
        </h1>
        <p className="text-gray-400 text-sm">
          Resumen de actividad - Junio 2025
        </p>
      </div>
    </div>
  );
}
