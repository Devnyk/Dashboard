import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import avatar from "../assets/avatar.jpg";

export default function Header() {
  return (
    <header className="bg-white p-4 flex items-center justify-between border-b">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-2 py-1 rounded w-1/2">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
        <input type="text" placeholder="Search..." className="bg-transparent outline-none ml-2 flex-1" />
      </div>

      {/* Icons & Avatar */}
      <div className="flex items-center gap-4">
        <BellIcon className="w-6 h-6 cursor-pointer" />
        <img src={avatar} alt="User" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
}
