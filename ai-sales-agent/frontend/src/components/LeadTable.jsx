'use client';

import Link from 'next/link';
import { getStatusBadgeColor, truncateText } from '@/utils/helpers';

export default function LeadTable({ leads, onAnalyze, analyzing }) {
  if (!leads || leads.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
        <p className="text-gray-600">No leads yet. Add your first lead to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Business Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Industry
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Website
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {lead.business_name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {lead.industry}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {lead.website ? (
                    <a
                      href={lead.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 truncate"
                    >
                      {truncateText(lead.website, 30)}
                    </a>
                  ) : (
                    <span className="text-gray-400">—</span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(
                      lead.status
                    )}`}
                  >
                    {lead.status || 'New'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm space-x-2 flex">
                  <button
                    onClick={() => onAnalyze(lead.id)}
                    disabled={analyzing === lead.id}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg text-xs font-medium transition"
                  >
                    {analyzing === lead.id ? 'Analyzing...' : 'Analyze'}
                  </button>
                  <Link
                    href={`/leads/${lead.id}`}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg text-xs font-medium transition"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
