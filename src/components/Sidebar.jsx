import { Link } from "react-router-dom";
import { HomeIcon, UserIcon, CubeIcon, ChartBarIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const links = [
    { to: "/", label: "Dashboard", icon: <HomeIcon className="w-5 h-5" /> },
    { to: "/users", label: "Users", icon: <UserIcon className="w-5 h-5" /> },
    { to: "/products", label: "Products", icon: <CubeIcon className="w-5 h-5" /> },
    { to: "/analytics", label: "Analytics", icon: <ChartBarIcon className="w-5 h-5" /> },
    { to: "/settings", label: "Settings", icon: <Cog6ToothIcon className="w-5 h-5" /> },
  ];

  return (
    <aside className="bg-white w-64 p-4 border-r hidden md:block">
      <h1 className="text-2xl font-bold mb-6">Admin</h1>
      <nav className="space-y-2">
        {links.map((link, i) => (
          <Link key={i} to={link.to} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
            {link.icon}
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
