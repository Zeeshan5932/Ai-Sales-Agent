'use client';

import { useState, useEffect } from 'react';
import LeadForm from '@/components/LeadForm';
import LeadTable from '@/components/LeadTable';
import { getLeads, analyzeLead } from '@/services/leadApi';

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [analyzing, setAnalyzing] = useState(null);

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    try {
      setLoading(true);
      const data = await getLeads();
      setLeads(Array.isArray(data) ? data : []);
      setError('');
    } catch (err) {
      setError('Failed to load leads');
      setLeads([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyzeLead = async (leadId) => {
    setAnalyzing(leadId);
    try {
      await analyzeLead(leadId);
      await loadLeads();
    } catch (err) {
      setError('Failed to analyze lead');
    } finally {
      setAnalyzing(null);
    }
  };

  const stats = [
    {
      label: 'Total Leads',
      value: leads.length,
      bg: 'bg-blue-50',
      icon: '👥',
    },
    {
      label: 'Analyzed',
      value: leads.filter((l) => l.status === 'analyzed').length,
      bg: 'bg-green-50',
      icon: '✅',
    },
    {
      label: 'New',
      value: leads.filter((l) => l.status === 'new' || !l.status).length,
      bg: 'bg-yellow-50',
      icon: '⭐',
    },
    {
      label: 'Closed',
      value: leads.filter((l) => l.status === 'closed').length,
      bg: 'bg-purple-50',
      icon: '🎉',
    },
  ];

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`${stat.bg} rounded-lg p-6 border border-gray-200`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
              </div>
              <div className="text-4xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <LeadForm onSubmitSuccess={loadLeads} />
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Leads</h2>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading leads...</p>
            </div>
          ) : (
            <LeadTable
              leads={leads}
              onAnalyze={handleAnalyzeLead}
              analyzing={analyzing}
            />
          )}
        </div>
      </div>
    </div>
  );
}
