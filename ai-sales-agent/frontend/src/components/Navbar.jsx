'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-lg font-bold text-gray-900 hidden sm:inline">
                AI Sales Agent
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Dashboard
            </Link>
            <Link
              href="/leads"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Leads
            </Link>
            <Link
              href="/analysis"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Analysis
            </Link>
            <Link
              href="/settings"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Settings
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Dashboard
            </Link>
            <Link
              href="/leads"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Leads
            </Link>
            <Link
              href="/analysis"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Analysis
            </Link>
            <Link
              href="/settings"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Settings
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
