import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from "@heroicons/react/24/solid";

export default function AnalyticsCard({ title, value, change, changeType, icon: Icon }) {
  const changeColor = changeType === "up" ? "text-green-500" : "text-red-500";

  return (
    <div className="bg-gradient-to-br from-white/80 to-white/50 backdrop-blur-lg p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
        <Icon className="w-6 h-6" />
      </div>

      {/* Text */}
      <div className="flex-1">
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
      </div>

      {/* Change indicator */}
      {change && (
        <div className={`flex items-center text-sm font-medium ${changeColor}`}>
          {changeType === "up" ? <ArrowTrendingUpIcon className="w-4 h-4 mr-1" /> : <ArrowTrendingDownIcon className="w-4 h-4 mr-1" />}
          {change}
        </div>
      )}
    </div>
  );
}
