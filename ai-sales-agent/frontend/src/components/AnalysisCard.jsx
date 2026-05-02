'use client';

export default function AnalysisCard({ analysis, loading = false }) {
  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
        <p className="text-center text-gray-600 mt-4">Analyzing lead...</p>
      </div>
    );
  }

  if (!analysis) {
    return null;
  }

  const extractScore = (text) => {
    const match = text?.match(/SCORE:\s*(\d+)/i);
    return match ? match[1] : null;
  };

  const score = analysis.analysis ? extractScore(analysis.analysis) : null;

  return (
    <div className="space-y-6">
      {/* Analysis Section */}
      {analysis.analysis && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Social Media Analysis</h3>
            {score && (
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-gray-600">Score:</span>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                  <span className="text-lg font-bold text-blue-600">{score}</span>
                </div>
              </div>
            )}
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 preserve-whitespace leading-relaxed">
            {analysis.analysis}
          </div>
        </div>
      )}

      {/* Weaknesses Section */}
      {analysis.weaknesses && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-red-500 mr-2">⚠️</span>
            Key Weaknesses
          </h3>
          <div className="bg-red-50 rounded-lg p-4">
            <div className="text-sm text-gray-700 preserve-whitespace space-y-2">
              {analysis.weaknesses
                .split('\n')
                .filter((line) => line.trim())
                .map((line, idx) => (
                  <div key={idx} className="flex space-x-3">
                    <span className="text-red-600 font-bold min-w-fit">•</span>
                    <span>{line.replace(/^[•\-\*]\s*/, '')}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Opportunities Section */}
      {analysis.opportunity && (
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-green-500 mr-2">💡</span>
            Business Opportunities
          </h3>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-sm text-gray-700 preserve-whitespace space-y-2">
              {analysis.opportunity
                .split('\n')
                .filter((line) => line.trim())
                .map((line, idx) => (
                  <div key={idx} className="flex space-x-3">
                    <span className="text-green-600 font-bold min-w-fit">✓</span>
                    <span>{line.replace(/^[•\-\*]\s*/, '')}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Final Report Section */}
      {analysis.final_report && (
        <div className="bg-white rounded-lg border border-blue-200 p-6 shadow-sm border-l-4">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-blue-600 mr-2">📋</span>
            Final Sales Strategy Report
          </h3>
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-sm text-gray-700 preserve-whitespace leading-relaxed">
              {analysis.final_report}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

