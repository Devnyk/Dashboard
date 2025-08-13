import { BellIcon, MagnifyingGlassIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import avatar from "../assets/avatar.jpg";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-30 p-4 flex items-center justify-between border-b shadow-sm">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-200 px-3 py-3 rounded-full w-full max-w-xs transition focus-within:ring-2 focus-within:ring-indigo-500">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-2 flex-1 text-sm text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Icon Actions */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <div className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100 transition">
          <BellIcon className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        </div>

        {/* Avatar */}
        <img
          src={avatar}
          alt="User"
          className="w-9 h-9 rounded-full border border-gray-200 hover:scale-105 transition"
        />
      </div>
    </header>
  );
}
