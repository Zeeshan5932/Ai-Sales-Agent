'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getLead, analyzeLead } from '@/services/leadApi';
import AnalysisCard from '@/components/AnalysisCard';
import PitchCard from '@/components/PitchCard';
import CallScriptCard from '@/components/CallScriptCard';
import { getStatusBadgeColor } from '@/utils/helpers';

export default function LeadDetail() {
  const params = useParams();
  const leadId = params.id;

  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadLead();
  }, [leadId]);

  const loadLead = async () => {
    try {
      setLoading(true);
      const data = await getLead(leadId);
      setLead(data);
      setError('');
    } catch (err) {
      setError('Failed to load lead details');
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = async () => {
    setAnalyzing(true);
    try {
      await analyzeLead(leadId);
      await loadLead();
    } catch (err) {
      setError('Failed to analyze lead');
    } finally {
      setAnalyzing(false);
    }
  };

  if (loading) {
    return (
      <div className="p-4 sm:p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="text-gray-600 mt-4">Loading lead details...</p>
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="p-4 sm:p-8">
        <p className="text-red-600">Lead not found</p>
        <Link href="/leads" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
          Back to Leads
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <Link href="/leads" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
        ← Back to Leads
      </Link>

      {/* Header Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{lead.business_name}</h1>
            <p className="text-gray-600 mt-2 text-lg">{lead.industry}</p>
          </div>
          <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusBadgeColor(
              lead.status
            )}`}
          >
            {lead.status || 'New'}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-sm text-gray-600 font-semibold">Website</p>
            {lead.website ? (
              <a
                href={lead.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 break-all text-sm"
              >
                {lead.website}
              </a>
            ) : (
              <p className="text-gray-400 text-sm">—</p>
            )}
          </div>

          <div>
            <p className="text-sm text-gray-600 font-semibold">Social Link</p>
            {lead.social_link ? (
              <a
                href={lead.social_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 break-all text-sm"
              >
                {lead.social_link}
              </a>
            ) : (
              <p className="text-gray-400 text-sm">—</p>
            )}
          </div>

          <div>
            <p className="text-sm text-gray-600 font-semibold">Followers</p>
            <p className="font-semibold text-gray-900 text-lg">{lead.followers || 0}</p>
          </div>

          <div>
            <p className="text-sm text-gray-600 font-semibold">Recent Posts</p>
            <p className="font-semibold text-gray-900 text-lg">{lead.recent_posts || 0}</p>
          </div>
        </div>

        {!lead.analysis && (
          <button
            onClick={handleAnalyze}
            disabled={analyzing}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 px-6 rounded-lg transition flex items-center space-x-2"
          >
            <span>{analyzing ? '⏳ Analyzing...' : '🔍 Analyze Lead'}</span>
          </button>
        )}
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {lead.analysis && (
        <div className="space-y-8">
          {/* Analysis Report */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 AI Analysis Report</h2>
            <AnalysisCard analysis={lead} />
          </div>

          {/* Pitch and Call Script */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Sales Strategy Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <PitchCard leadData={lead} />
              <CallScriptCard leadData={lead} />
            </div>
          </div>

          {/* Export Report Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => {
                const reportText = `
BUSINESS ANALYSIS REPORT
=======================

Business Name: ${lead.business_name}
Industry: ${lead.industry}
Website: ${lead.website || 'N/A'}
Social Link: ${lead.social_link || 'N/A'}

ANALYSIS
--------
${lead.analysis}

Generated at: ${new Date().toLocaleString()}
                `;
                const element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(reportText));
                element.setAttribute('download', `${lead.business_name}-report.txt`);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
              }}
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition"
            >
              📥 Export Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
