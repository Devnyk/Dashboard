import AnalyticsCard from "../components/AnalyticsCard";
import ChartComponent from "../components/ChartComponent";
import BarChartComponent from "../components/Charts/BarChartComponent";
import RecentActivityTable from "../components/RecentActivityTable";
import metrics from "../data/metrics";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((m, i) => (
          <AnalyticsCard key={i} title={m.title} value={m.value} />
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white p-4 rounded shadow flex gap-2">
        <ChartComponent />
        <BarChartComponent></BarChartComponent>
      </div>

      {/* Table */}
      <div className="bg-white p-4 rounded shadow">
        <RecentActivityTable />
      </div>
    </div>
  );
}
