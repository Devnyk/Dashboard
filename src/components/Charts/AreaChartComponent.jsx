import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", orders: 240 },
  { month: "Feb", orders: 139 },
  { month: "Mar", orders: 980 },
  { month: "Apr", orders: 390 },
  { month: "May", orders: 480 },
];

export default function AreaChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="orders" stroke="#6366F1" fillOpacity={1} fill="url(#colorOrders)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
