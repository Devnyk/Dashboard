export default function AnalyticsCard({ title, value, change, changeType }) {
  const changeColor =
    changeType === "up" ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col justify-between">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
      {change && (
        <p className={`text-sm font-medium ${changeColor}`}>
          {changeType === "up" ? "▲" : "▼"} {change}
        </p>
      )}
    </div>
  );
}
