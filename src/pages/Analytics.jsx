import ChartComponent from "../components/ChartComponent";
import BarChartComponent from "../components/Charts/BarChartComponent";
import PieChartComponent from "../components/Charts/PieChartComponent";
import AreaChartComponent from "../components/Charts/AreaChartComponent";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>

      {/* First Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          <ChartComponent /> {/* Existing line chart */}
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Revenue by Product</h2>
          <BarChartComponent /> {/* New bar chart */}
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">User Roles</h2>
          <PieChartComponent /> {/* New pie chart */}
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Orders Trend</h2>
          <AreaChartComponent /> {/* New area chart */}
        </div>
      </div>
    </div>
  );
}
