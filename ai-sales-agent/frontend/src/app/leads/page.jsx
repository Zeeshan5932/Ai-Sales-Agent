'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getLeads } from '@/services/leadApi';
import LeadTable from '@/components/LeadTable';

export default function Leads() {
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
      const { analyzeLead } = await import('@/services/leadApi');
      await analyzeLead(leadId);
      await loadLeads();
    } catch (err) {
      setError('Failed to analyze lead');
    } finally {
      setAnalyzing(null);
    }
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Leads</h1>
        <Link
          href="/dashboard"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition"
        >
          Add New Lead
        </Link>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">
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
  );
}
