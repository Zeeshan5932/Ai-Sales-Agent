'use client';

import { useState } from 'react';
import { createCallScript } from '@/services/analysisApi';

export default function CallScriptCard({ leadData }) {
  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerateScript = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await createCallScript({
        lead_id: leadData.id,
        business_name: leadData.business_name,
        analysis: leadData.analysis || '',
      });

      setScript(response.script || response);
    } catch (err) {
      setError(err.message || 'Failed to generate call script');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(script);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatScript = (scriptText) => {
    return scriptText.split('\n').map((line, idx) => {
      if (line.match(/^(YOU|THEM|ME|PROSPECT|SELLER|AGENT|CALLER):/i)) {
        return (
          <div key={idx} className="flex space-x-3 mb-2">
            <span className="font-bold text-green-600 min-w-fit">
              {line.split(':')[0]}:
            </span>
            <span>{line.substring(line.indexOf(':') + 1).trim()}</span>
          </div>
        );
      }
      if (line.match(/^\d+\./)) {
        return (
          <div key={idx} className="font-semibold text-gray-900 mt-3 mb-2">
            {line}
          </div>
        );
      }
      if (line.trim() === '') {
        return <div key={idx} className="h-2" />;
      }
      return (
        <div key={idx} className="text-gray-700 mb-1">
          {line}
        </div>
      );
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-green-600 mr-2">📞</span>
        Cold Call Script
      </h3>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {!script ? (
        <button
          onClick={handleGenerateScript}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition flex items-center justify-center space-x-2"
        >
          <span>{loading ? '⏳ Generating...' : '✨ Generate Call Script'}</span>
        </button>
      ) : (
        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-600">
            <div className="text-sm text-gray-700 preserve-whitespace leading-relaxed">
              {formatScript(script)}
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={handleCopy}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-2 px-4 rounded-lg transition flex items-center justify-center space-x-2"
            >
              <span>{copied ? '✓ Copied!' : '📋 Copy Script'}</span>
            </button>
            <button
              onClick={() => setScript('')}
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
