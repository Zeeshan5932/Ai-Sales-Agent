'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Leads', href: '/leads', icon: '👥' },
    { name: 'Analysis', href: '/analysis', icon: '📈' },
    { name: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  return (
    <div className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-6">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">AI</span>
          </div>
          <span className="text-lg font-bold text-gray-900">Sales Agent</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
              isActive(item.href)
                ? 'bg-blue-50 text-blue-600 font-semibold'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm font-semibold text-gray-900">Need help?</p>
          <p className="text-xs text-gray-600 mt-1">
            Check our documentation for guides and support.
          </p>
        </div>
      </div>
    </div>
  );
}
