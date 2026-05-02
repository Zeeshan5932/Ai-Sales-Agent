'use client';

import { useState } from 'react';
import { createPitch } from '@/services/analysisApi';

export default function PitchCard({ leadData }) {
  const [loading, setLoading] = useState(false);
  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGeneratePitch = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await createPitch({
        lead_id: leadData.id,
        business_name: leadData.business_name,
        analysis: leadData.analysis || '',
      });

      setPitch(response.pitch || response);
    } catch (err) {
      setError(err.message || 'Failed to generate pitch');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(pitch);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-blue-600 mr-2">🎯</span>
        Personalized Sales Pitch
      </h3>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {!pitch ? (
        <button
          onClick={handleGeneratePitch}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition flex items-center justify-center space-x-2"
        >
          <span>{loading ? '⏳ Generating...' : '✨ Generate Sales Pitch'}</span>
        </button>
      ) : (
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
            <p className="text-sm text-gray-700 preserve-whitespace leading-relaxed">
              {pitch}
            </p>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={handleCopy}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-2 px-4 rounded-lg transition flex items-center justify-center space-x-2"
            >
              <span>{copied ? '✓ Copied!' : '📋 Copy Pitch'}</span>
            </button>
            <button
              onClick={() => setPitch('')}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-2 px-4 rounded-lg transition"
            >
              🔄 Regenerate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
