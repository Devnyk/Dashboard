import recentActivity from "../data/recentActivity";

export default function RecentActivityTable() {
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2">User</th>
          <th className="p-2">Action</th>
          <th className="p-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {recentActivity.map((item, i) => (
          <tr key={i} className="border-t hover:bg-gray-50">
            <td className="p-2">{item.user}</td>
            <td className="p-2">{item.action}</td>
            <td className="p-2">{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

