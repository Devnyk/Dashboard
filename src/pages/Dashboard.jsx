import AnalyticsCard from "../components/AnalyticsCard";
import ChartComponent from "../components/ChartComponent";
import BarChartComponent from "../components/Charts/BarChartComponent";
import metrics from "../data/metrics";
import { UsersIcon, ShoppingBagIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

export default function Dashboard() {
  const metricsWithIcons = [
    { ...metrics[0], icon: CurrencyDollarIcon },
    { ...metrics[1], icon: UsersIcon },
    { ...metrics[2], icon: ShoppingBagIcon }
  ];

  const activities = [
    { user: "John Doe", action: "Placed an order", date: "2025-08-12", status: "Completed" },
    { user: "Jane Smith", action: "Signed up", date: "2025-08-11", status: "Pending" },
    { user: "Michael Lee", action: "Updated profile", date: "2025-08-10", status: "Completed" },
    { user: "Emma Johnson", action: "Requested refund", date: "2025-08-09", status: "Rejected" },
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Rejected":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-10">
      {/* ===== Metric Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {metricsWithIcons.map((m, i) => (
          <AnalyticsCard
            key={i}
            title={m.title}
            value={m.value}
            change={m.change}
            changeType={m.changeType}
            icon={m.icon}
          />
        ))}
      </div>

      {/* ===== Charts Section ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">📈 Sales Overview</h2>
          <ChartComponent />
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">💰 Revenue by Product</h2>
          <BarChartComponent />
        </div>
      </div>

      {/* ===== Recent Activity Table ===== */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">📜 Recent Activity</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-gray-600 font-semibold text-sm">User</th>
                <th className="px-6 py-3 text-gray-600 font-semibold text-sm">Action</th>
                <th className="px-6 py-3 text-gray-600 font-semibold text-sm">Date</th>
                <th className="px-6 py-3 text-gray-600 font-semibold text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((a, i) => (
                <tr
                  key={i}
                  className={`hover:bg-gray-50 transition ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="px-6 py-4 text-gray-800">{a.user}</td>
                  <td className="px-6 py-4 text-gray-600">{a.action}</td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{a.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(
                        a.status
                      )}`}
                    >
                      {a.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
